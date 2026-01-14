# ThreadRevive
**Old Threads, New Stories: The Future of Circular Fashion**

## Overview
ThreadRevive is a curated middle-man platform that connects thrifted clothing sellers with professional stylists and designers to upcycle garments for new owners. We aim to combat textile waste and the "Fast Fashion" crisis by extending the life cycle of clothing through a unique Value-Addition Layer.

Unlike standard thrift apps, ThreadRevive turns upcycling into a scalable service rather than a DIY project, ensuring every item is professionally redesigned before resale.

## Key Features
* **Value-Addition Layer:** Every item is professionally restored and styled by experts.
* **Designer Matching Engine:** A specialized module to match garments with the right stylist based on style and expertise.
* **AI-Powered Categorization:** Utilizes image recognition for automated clothing categorization.
* **3-Point Quality Check:** A digital verification system ensuring upcycled products meet high professional standards.
* **Upcycle Hubs:** Strategic regional hubs established to minimize shipping distances and reduce carbon footprints.
* **Sustainability Core:** Focuses on moving fashion from a linear "disposal" model to a circular "restoration" model.
  
## AI System & Dataset
*	Model: Transfer Learning using CNN-based architecture ResNet50.
*	Task: Image-based clothing category classification.
*	Dataset:
  	Custom dataset built by scraping real e-commerce images (Myntra) for modern fashion relevance.
		Categories include casual shirts, formal shirts, printed t-shirts, hoodies, cargos, and jeans.
		Dataset curated and cleaned to avoid duplication and bias.
*	Accuracy:
		Achieved ~95% classification accuracy on validation data.
*	Role of AI:
		Automates garment categorization at intake.
		Acts as the foundation for downstream designer matching and marketplace listing.

## Tech Stack
* **Frontend:** React.js — For a high-performance, responsive marketplace UI.
* **Backend:** Node.js & Express — Handling secure user transactions and API logic.
* **Database:** MongoDB — Management of inventory and designer portfolios.
* AI/ML: Python, TensorFlow/Keras, OpenCV — image processing and model training.

## Architecture & Methodology
1. **Module 1 (AI Recognition):** Categorizes incoming thrift items.
2. **Module 2 (Matching Engine):** Connects the item to a designer based on the restoration goal.
3. **Module 3 (Marketplace):** The final upcycled product is listed for eco-conscious buyers.

## Impact
* **Environmental:** Diverts clothing from landfills and reduces the water/carbon footprint of fashion production.
* **Economic:** Empowers local designers and students by providing a professional platform to monetize their skills.
* **Social:** Leverages the booming Gen-Z "Slow Fashion" trend.

## Team TrendByte
* **Tanishka Singh** (Team Leader)
* **Tarush Jain**
* **Prashant Sharma**
* **Manya Singh**
* **Aashi Sharma**

---
*Developed for **Innovate 3.0: Hack to Build** at Jaypee Institute of Information Technology (JIIT), Noida.*
>>>>>>> 7f4e74e1869ba97a13b66acccb47599edfbc6c80
