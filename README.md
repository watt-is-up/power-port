# ⚡ Electric Vehicle Charging Management System

**Group 11 – Watt’s Up**  
Team Members: Primož Gabrovec, Stefan Krstevski, Tomi Trošt  
📅 October 2025  

---

## 🚗 Project Overview

The **Electric Vehicle Charging Management System** is a **distributed, multi-tenant web application** designed to promote and manage the consumption of electric vehicle (EV) charging stations.

Finding an available charging station in the city can be challenging, and owning a private charger can be costly. This system bridges that gap by enabling users to locate, book, and pay for charging sessions, while allowing station owners to register and monetize their chargers.

The application is **cloud-native**, ensuring **high availability**, **fault tolerance**, and **scalable microservice deployment**.

---

## 🧩 Key Features

- 🔐 **User Service** – Handles registration, authentication (JWT), profiles, and roles.  
- 🏙️ **Station Management Service** – Manages charging stations, availability, and session lifecycles (start, stop, duration, energy tracking).  
- 💳 **Billing Service** – Calculates charging costs, processes payments, and generates invoices.  
- 🧭 **Provider Service** – Allows providers to register, configure, and promote their charging stations.  
- ⚙️ **Data Tracking Service** – Tracks energy usage and session data for analytics.  
- 🌟 **Reviews Service** – Enables users to rate and review charging experiences.  
- 📧 **Notification Service** – Sends alerts for billing, session updates, and maintenance.

---

## 💡 Use Cases

1. **Find & View Stations**  
   Users can view nearby charging stations on a map and check their real-time availability.  

2. **Start & Manage Sessions**  
   Users can start, stop, and monitor their charging sessions, with live updates on progress and costs.  

3. **Payment & Billing**  
   The system automatically calculates session costs and facilitates secure payments with invoice generation.  

4. **Station Management**  
   Providers can add, edit, or remove stations and manage pricing and availability.  

5. **Reviews & Feedback**  
   Users can leave feedback on stations, improving community trust and transparency.

---

## 🧱 System Architecture

This project is built using a **microservices architecture**, enabling modular scalability and fault isolation.

Each service communicates via **REST APIs** and **gRPC**, orchestrated through **Kubernetes** and deployed to **Microsoft Azure** for cloud scalability.

**Core Architecture Highlights:**
- Decoupled backend services
- Centralized authentication and authorization
- Event-driven communication between services
- Shared SQL-based persistence layer
- Containerized services via Docker

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js |
| **Backend** | .NET |
| **Database** | SQL Database |
| **Cloud Platform** | Microsoft Azure |
| **Virtualization & Orchestration** | Docker, Kubernetes |
| **API Communication** | REST, gRPC |
| **Dev Tools** | Visual Studio Code, Azure DevOps, Postman |
| **Version Control** | GitHub Organization Repository |

---

## ⚙️ Getting Started

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/)
- [Node.js & npm](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/)
- Azure CLI (optional, for deployment)

### Installation

TBD
