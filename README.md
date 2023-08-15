<h1 align="center">Cloudlet</h1>

<p align="center">
Cloudlet is a lightweight containerized cloud platform built from scratch for educational purposes. It implements core infrastructure concepts using Docker but skips many features required for production use.

The goal of Cloudlet is to demonstrate building a basic cloud provider from the ground up as a learning experience. It is not intended for real workloads.

</p>

<p align="center">
  <img width="400" alt="cloudlet" src="assets/cloudlet.png">
<p/>

## Running Cloudlet - Dockerized Cloud Provider

Cloudlet is a dockerized cloud provider designed for learning purposes. It allows you to simulate a cloud environment locally using Docker containers. This guide will walk you through the steps to set up and run Cloudlet on your machine.

### Prerequisites

- Docker Desktop or Docker Engine installed on your machine.

### Getting Started

1. **Start Docker Engine:**

   Open your terminal and ensure that your Docker Engine is up and running. You can use Docker Desktop or any other Docker setup you prefer.

2. **Clone the Repository:**

   Clone the Cloudlet repository to your local machine:

   ```bash
   git clone https://github.com/your-username/cloudlet.git
   cd cloudlet
   ```

3. **Run Cloudlet:**

   In the project root directory, run the following commands to create and start Cloudlet services using Docker Compose:

   ```bash
   npm run create:containers # Build cloudlet containers
   docker-compose up --build # Boot cloudlet services
   ```

   This command will build and start the required Docker containers for Cloudlet. You'll see the services being initialized.

4. **Access the API:**

   Once the services are up and running, you can interact with the Cloudlet services via an API. The API will be available at `http://localhost:8888`.

   > Note: In the future, a frontend will be provided to interact with the API more conveniently.

5. **Explore and Learn:**

   With Cloudlet up and running, you can now explore and learn about cloud infrastructure, container orchestration, and more in a controlled local environment.

### Shutting Down

To stop Cloudlet and shut down the services, you can use the following command:

```bash
docker-compose down
```

This will gracefully stop and remove the Cloudlet containers.

---

Feel free to explore and experiment with Cloudlet to better understand cloud concepts in a safe and local environment.

**Disclaimer:** Cloudlet is intended for learning purposes only and should not be used for production or any sensitive workloads. Always exercise caution and best practices when working with containerized environments.
