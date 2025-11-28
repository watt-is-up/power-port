# ⚡ Electric Vehicle Charging Management System  
**Group 11 – Watt’s Up**  
Team Members: Primož Gabrovec, Stefan Krstevski, Tomi Trošt  
📅 October 2025  

---

# 🚗 Project Overview

The **Electric Vehicle Charging Management System** is a **distributed, cloud-native, multi-tenant web application** designed to promote and manage the consumption of electric vehicle (EV) charging stations.

The system helps:
- ⚡ **Users** find, book, and pay for charging sessions  
- 🏪 **Providers** register and monetize their private charging stations  

The platform is built around **scalable microservices**, designed for deployment on **Kubernetes**, with CI/CD pipelines for automated testing and container image publishing.

---

# 🧩 Key Features

### Backend Services
- 🔐 **User Service** — Authentication (JWT), authorization, roles, profiles  
- 🏙️ **Station Service** — Station management, availability, session lifecycle  
- 💳 **Billing Service** — Pricing, cost calculation, payments, invoices  
- 🧭 **Provider Service** — Provider onboarding, station management  
- ⚙️ **Data Tracking Service** — Energy usage, analytics events  
- 🌟 **Reviews Service** — User ratings and reviews  

### Frontend
- 🖥️ **React + Vite Frontend** for the web UI  

### Infrastructure
- 🐳 Dockerized microservices  
- ☸️ Kubernetes Deployment & Helm Charts  
- 🚀 GitHub Actions CI/CD with GHCR image publishing  

---

# 🗂️ Repository Structure

```
power-port/
│
├── src/                                # All .NET microservices
│   ├── UserService/
│   ├── BillingService/
│   ├── StationService/
│   ├── ProviderService/
│   ├── DataTrackingService/
│   ├── ReviewsService/
│   └── Shared/                         # Shared models/utilities (optional)
│
├── frontend/                           
│   └── web/                            # React + Vite frontend project
│
├── deploy/
│   ├── k8s/                             # Raw Kubernetes YAML manifests
│   │   ├── user-service.yaml
│   │   ├── billing-service.yaml
│   │   ├── station-service.yaml
│   │   ├── provider-service.yaml
│   │   ├── data-tracking-service.yaml
│   │   └── reviews-service.yaml
│   │
│   └── helm/                            # Helm charts for streamlined deployment
│       └── ev-charging/
│           ├── values.yaml
│           ├── templates/
│           └── Chart.yaml
│
├── docker-compose.yml                   # Local multi-service development stack
├── README.md
└── .github/
    └── workflows/
        └── ci-cd.yml                   # CI pipeline for testing & pushing images
```

---

# 🏗️ Project Architecture

### ✔ Microservices  
Each backend service runs independently on port **8080**, containerized with its own Dockerfile.

### ✔ Container Registry  
CI/CD pushes images to **GitHub Container Registry (GHCR)** automatically:

```
ghcr.io/<organization>/<service-name>:latest
```

### ✔ Deployment  
You can deploy using:

- **Docker Compose** (local developer runtime)
- **Kubernetes YAMLs** (simple testing)
- **Helm Chart** (recommended for real clusters)

### ✔ CI/CD Pipeline (GitHub Actions)
The pipeline includes:

1. **Build & Test (.NET)**  
2. **Build Docker images**  
3. **Push to GHCR**  
4. *(optional)* Deploy to Kubernetes (currently disabled)

---

# 👨‍💻 Local Development Guide

## 🚀 Run all services with Docker Compose

From the project root:

```bash
docker-compose up --build
```

This starts:

- All backend microservices  
- React frontend on `http://localhost:3000`  

### Stop:

```bash
docker-compose down
```

---

# ☸️ Local Kubernetes Development (Docker Desktop Kubernetes)

### Ensure Kubernetes is enabled:
Docker Desktop → Settings → Kubernetes → ✔ Enable Kubernetes

### Apply all manifests:

```bash
kubectl apply -f deploy/k8s/
```

### Check pods:

```bash
kubectl get pods
```

### Delete all:

```bash
kubectl delete -f deploy/k8s/
```

---

# 🔧 Helm Deployment (Recommended)

### Install/update the Helm chart:

```bash
helm upgrade --install powerport deploy/helm
```

### Delete release:

```bash
helm uninstall powerport
```

---

# 🧪 Running Tests

### Run tests for all .NET projects:

```bash
dotnet test
```

---

# 🤖 CI/CD: GitHub Actions

Workflow file:  
`.github/workflows/ci-cd.yml`

### The pipeline runs on:
- Push to `main`
- Pull Requests

### Steps:
1. Restore → Build → Test  
2. Build Docker images  
3. Push images to GitHub Container Registry  
4. *(Deploy step commented out for now)*

### Images are published as:

```
ghcr.io/<organization>/<service-name>:latest
```

---

# 🔐 Branching Strategy

We use a **protected main branch**.  
All changes must go through Pull Requests.

Recommended structure:

```
main                # production-ready code
develop (optional)  # integration branch
feature/*           # feature development
hotfix/*            # important fixes
```

Example:

```bash
git checkout -b feature/add-station-ui
git push -u origin feature/add-station-ui
```

---

# 🧭 Useful Development Commands

### Check container logs

```bash
docker logs <container-name>
```

### Rebuild a single service

```bash
docker-compose build user-service
```

### Test Kubernetes connection

```bash
kubectl cluster-info
```

### View running pods

```bash
kubectl get pods -A
```

---

# 💡 Future Enhancements

- Azure Kubernetes Service (AKS) deployment  
- KeyVault integration  
- Event Bus (Kafka or Azure Service Bus)  
- Automatic certificate management (Cert-Manager + Ingress)  
- CI → CD GitOps pipeline (Argo CD)

---

# 📬 Contact

For questions or issues, contact Team **Watt’s Up**  
or open an Issue in the GitHub repository.

