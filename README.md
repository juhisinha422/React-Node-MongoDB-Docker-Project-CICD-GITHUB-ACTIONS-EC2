###  **End-to-end CI/CD implementation for a full-stack MERN application using GitHub Actions, Docker, Docker Hub, and AWS EC2 (Self-Hosted Runner).**

---

## 📌 Overview
**End-to-End CI/CD Pipeline using GitHub Actions, Docker, AWS EC2 & Nginx**

This repository demonstrates a **production-grade CI/CD pipeline** for a **full-stack MERN application**.

### 🧰 Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js & Express
- **Database:** MongoDB Atlas
- **CI/CD:** GitHub Actions
- **Containerization:** Docker & Docker Compose
- **Image Registry:** Docker Hub
- **Deployment:** AWS EC2
- **Runner:** GitHub Actions Self-Hosted Runner

Every push to the `main` branch automatically:
1. Builds Docker images
2. Pushes images to Docker Hub
3. Deploys updated containers on AWS EC2

---

## 🏗️ CI/CD Architecture

```bash
Developer → GitHub → GitHub Actions → Docker Build → Docker Hub → AWS EC2 → Live Application
```

<img width="1536" height="1024" alt="Image" src="https://github.com/user-attachments/assets/81d1e620-1a55-4b56-9680-e5c72a317be9" />

## 🏗️ Architecture Overview

```bash
Developer Push → GitHub

      ↓

GitHub Actions
      
      ↓

Run Tests → Build Docker Image

      ↓

Push Image to Docker Hub

      ↓

SSH into AWS EC2

      ↓

Pull Latest Image

      ↓

Restart Container via Docker Compose

      ↓
Traffic served via Nginx

```
---

## ⚙️ CI/CD Pipeline Steps

### 1️⃣ Code Push
- Developer pushes code to the `main` branch

### 2️⃣ GitHub Actions Trigger
- Workflow is triggered automatically

### 3️⃣ Build Docker Images
- Backend image
- Frontend image

### 4️⃣ Push to Docker Hub
Images are pushed to:
- `juhisinha/mern-backend:latest`
- `juhisinha/mern-frontend:latest`

### 5️⃣ Deploy on AWS EC2
- EC2 runs a **self-hosted GitHub Actions runner**
- Latest images are pulled
- Containers are restarted using Docker Compose

---

## 🧪 GitHub Actions Workflow

Workflow file:
```bash
.github/workflows/deploy.yml
```


### 🔑 Key Highlights
- Uses **self-hosted runner on EC2**
- No EC2 IP or SSH keys stored in GitHub
- Secure secrets via GitHub Secrets
- Fully automated deployment

---

## 📦 Docker Images

| Service  | Docker Image |
|--------|--------------|
| Backend | `juhisinha/mern-backend:latest` |
| Frontend | `juhisinha/mern-frontend:latest` |

Images are built and pushed automatically during CI.

---

## ☁️ Deployment Details

- **Platform:** AWS EC2 (Ubuntu)
- **Frontend:** Nginx (Docker) → Port `80`
- **Backend:** Node.js → Port `5000`

### 🌍 Access Application
```bash
http://<EC2_PUBLIC_IP>
```


---

## 🎨 Frontend UI

The frontend is a **DevOps-themed animated UI** featuring:
- Dark background
- Glowing / neon text
- CI/CD explanation
- DevOps tools showcase
- Auto-deployment on every push

---

## 🔐 Prerequisites

Ensure the following are installed on EC2:
- Docker
- Docker Compose
- GitHub Actions Self-Hosted Runner

---

## 🛠️ Implementation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/juhisinha422/React-Node-MongoDB-Docker-Project-CICD-GITHUB-ACTIONS-EC2.git
```

## 2️⃣ Configure GitHub Secrets

Add the following secrets:
```bash
MONGO_URI

DOCKERHUB_USERNAME

DOCKERHUB_TOKEN
```

### 3️⃣ Setup Self-Hosted Runner

Register EC2 as a GitHub Actions runner

Run runner as a systemd service

### 4️⃣ Environment Variables

```bash
Frontend .env:

REACT_APP_API_URL=http://<EC2_PUBLIC_IP>:5000
```
### 📸 Screenshots

## GitHub Actions Pipeline
<img width="1887" height="787" alt="Image" src="https://github.com/user-attachments/assets/da8898ee-d430-4104-9682-416ec54b0873" />

## Docker Hub Images
<img width="1903" height="937" alt="Image" src="https://github.com/user-attachments/assets/37401fb4-6771-41d6-8345-6bb6aba69f6e" />

## Live Deployment on EC2
<img width="1801" height="846" alt="Image" src="https://github.com/user-attachments/assets/cb8debcb-7c15-4881-b719-7de9158f7776" />

### 🧠 Key Learnings

```bash 
Implemented secure CI/CD without SSH

Used Docker Hub as image registry

Deployed via self-hosted GitHub runner

Achieved fully automated cloud deployment
```

### 👩‍💻 Author

Juhi Sinha
DevOps Engineer 🚀

Passionate about CI/CD automation, Docker, cloud infrastructure, and scalable deployments.


