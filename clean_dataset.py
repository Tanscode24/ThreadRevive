import os
import shutil
import torch
import numpy as np

from torchvision import models, transforms
from PIL import Image
from sklearn.metrics.pairwise import cosine_distances
from tqdm import tqdm

# ================= CONFIG =================
BASE_DIR = "/Users/prashantsharma/Developer/pyt/visual studio programs/myntraScraper/dataset_raw"
CLEAN_DIR = "/Users/prashantsharma/Developer/pyt/visual studio programs/myntraScraper/dataset_clean"

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
IMAGE_SIZE = 224
OUTLIER_STD_THRESHOLD = 2.0

VALID_EXTENSIONS = (".jpg", ".jpeg", ".png")

# ================= MODEL ==================
model = models.resnet50(pretrained=True)
model.fc = torch.nn.Identity()
model = model.to(DEVICE)
model.eval()

# ================= TRANSFORMS =============
transform = transforms.Compose([
    transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

# ================= HELPERS =================
def extract_embedding(img_path):
    try:
        img = Image.open(img_path).convert("RGB")
        img = transform(img).unsqueeze(0).to(DEVICE)
        with torch.inference_mode():
            emb = model(img).cpu().numpy().flatten()
        return emb
    except Exception as e:
        return None

# ================= MAIN ====================
os.makedirs(CLEAN_DIR, exist_ok=True)

for class_name in os.listdir(BASE_DIR):
    class_path = os.path.join(BASE_DIR, class_name)
    if not os.path.isdir(class_path):
        continue

    print(f"\nProcessing class: {class_name}")

    images = []
    embeddings = []

    for file in tqdm(os.listdir(class_path)):
        if not file.lower().endswith(VALID_EXTENSIONS):
            continue

        img_path = os.path.join(class_path, file)
        emb = extract_embedding(img_path)

        if emb is not None:
            images.append(file)
            embeddings.append(emb)

    if len(embeddings) < 10:
        print(f"⚠️ Skipping {class_name} (too few valid images)")
        continue

    embeddings = np.array(embeddings)

    center = embeddings.mean(axis=0)
    distances = cosine_distances(embeddings, center.reshape(1, -1)).flatten()

    mean_dist = distances.mean()
    std_dist = distances.std()
    threshold = mean_dist + OUTLIER_STD_THRESHOLD * std_dist

    clean_indices = np.where(distances <= threshold)[0]

    clean_class_dir = os.path.join(CLEAN_DIR, class_name)
    os.makedirs(clean_class_dir, exist_ok=True)

    for idx in clean_indices:
        src = os.path.join(class_path, images[idx])
        dst = os.path.join(clean_class_dir, images[idx])
        shutil.copy(src, dst)

    print(f"Kept {len(clean_indices)} / {len(images)} images")

print("\n✅ Dataset cleaning completed successfully.")