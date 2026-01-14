# ThreadRevive – AI Backend

This directory contains the **AI inference backend** for **ThreadRevive**.  
It exposes a REST API that performs **image-based garment classification** using a deep learning model (**ResNet-50**).

The backend is designed as a **lightweight microservice** that can be consumed by the React frontend or any other client application.

---

## Overview

The AI backend:

- Accepts an image of a garment  
- Runs inference using a trained deep learning model  
- Returns the predicted garment category along with a confidence score  

This service powers the **AI-Powered Categorization** feature of ThreadRevive.

---

## Tech Stack

- **Python**
- **FastAPI** – REST API framework
- **PyTorch** – Deep learning framework
- **Torchvision** – Model architecture and preprocessing
- **Pillow** – Image handling

---

## API Endpoints

### Health Check

**GET /**

**Response**
```json
{
  "status": "API is running"
}

## Model Details

- **Architecture:** ResNet-50 (fine-tuned)
- **Model Type:** Convolutional Neural Network (CNN)
- **Framework:** PyTorch
- **Task:** Multi-class garment classification
- **Input:** RGB garment image (224 × 224)
- **Output:** Predicted garment category with confidence score

### Classes Supported
- casual_shirts  
- formal_shirts  
- printed_tshirts  
- printed_hoodies  
- jeans  
- men_cargos  
- formal_pants  

### Training Summary
- **Training Strategy:** Transfer learning with partial fine-tuning
- **Dataset:** Real-world thrift and e-commerce garment images
- **Data Cleaning:** Removal of mislabeled and multi-garment images
- **Validation Accuracy:** ~94–95%
- **Early Stopping:** Applied to prevent overfitting

> **Note:**  
> Trained model weights (`.pth` files) are not included in this repository due to size constraints.  
> The code demonstrates how the model is loaded and used for inference.