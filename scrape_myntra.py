import os
import time
import requests

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


# =============================
# CONFIG
# =============================
BASE_URL = "https://www.myntra.com/men-formal-pants?p="
SORT = "&sort=popularity"
START_PAGE = 1
END_PAGE = 27            # realistic upper bound
SAVE_DIR = "dataset_raw/formal_pants"


# =============================
# SETUP FOLDER
# =============================
os.makedirs(SAVE_DIR, exist_ok=True)

# Track already downloaded files (disk-level dedup)
existing_files = set(os.listdir(SAVE_DIR))


# =============================
# SETUP SELENIUM
# =============================
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_argument("--incognito")   # IMPORTANT

driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()),
    options=options
)


seen_urls = set()
img_count = len(existing_files)

print(f"[INFO] Starting with {img_count} existing images")


# =============================
# PAGE LOOP
# =============================
for page in range(START_PAGE, END_PAGE + 1):
    print(f"\n[INFO] Scraping page {page}")

    driver.get(BASE_URL + str(page) + SORT)
    time.sleep(4)

    products = driver.find_elements(By.CLASS_NAME, "product-base")
    print(f"[INFO] Products found: {len(products)}")

    for product in products:
        try:
            driver.execute_script(
                "arguments[0].scrollIntoView({block: 'center'});", product
            )
            time.sleep(0.5)

            img = product.find_element(By.TAG_NAME, "img")

            src = img.get_attribute("src")
            data_src = img.get_attribute("data-src")
            srcset = img.get_attribute("srcset")

            img_url = None

            if src and src.startswith("http"):
                img_url = src
            elif data_src and data_src.startswith("http"):
                img_url = data_src
            elif srcset:
                img_url = srcset.split(",")[0].split(" ")[0]

            if not img_url or img_url in seen_urls:
                continue

            seen_urls.add(img_url)
            img_count += 1

            filename = f"img_{img_count:04}.jpg"

            # disk-level duplication check
            if filename in existing_files:
                continue

            r = requests.get(img_url, timeout=10)
            if r.status_code == 200:
                with open(os.path.join(SAVE_DIR, filename), "wb") as f:
                    f.write(r.content)

        except Exception:
            continue

    print(f"[INFO] Total images so far: {img_count}")


# =============================
# CLEANUP
# =============================
driver.quit()
print("\n[DONE] Scraping finished")
print(f"[FINAL] Total images collected: {img_count}")