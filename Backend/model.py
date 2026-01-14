import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image


CLASS_NAMES = [
    'casual_shirts',
    'formal_pants',
    'formal_shirts',
    'jeans',
    'men_cargos',
    'printed_hoodies',
    'printed_tshirts'
]

DEVICE = "cpu"  

# Load model
model = models.resnet50(weights=None)
model.fc = nn.Linear(model.fc.in_features, len(CLASS_NAMES))
model.load_state_dict(
    torch.load("resnet50_clothing_best.pth", map_location=DEVICE)
)
model.eval()

# Image preprocessing 
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

def predict_image(image: Image.Image):
    image = transform(image).unsqueeze(0)

    with torch.no_grad():
        outputs = model(image)
        probs = torch.softmax(outputs, dim=1)
        confidence, pred = torch.max(probs, 1)

    return {
        "class": CLASS_NAMES[pred.item()],
        "confidence": round(confidence.item(), 4)
    }