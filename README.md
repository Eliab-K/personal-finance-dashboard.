# personal-finance-dashboard.
Project Title: Personal Finance Dashboard Project Overview The Personal Finance Dashboard is a full-stack web application designed to help users track, manage, and visualize their personal finances. Dockerized Environment – Both frontend and backend services are containerized using Docker and orchestrated with Docker Compose, 
Project Title: Personal Finance Dashboard
Project Overview
The Personal Finance Dashboard is a full-stack web application designed to help users track, manage, and visualize their personal finances. The platform integrates a frontend user interface, a backend API server, and a PostgreSQL database to provide a seamless and interactive experience for managing income, expenses, and financial goals.
Key Features
User-Friendly Dashboard – Displays key financial metrics such as total income, expenses, and savings in an easy-to-read format.
Expense and Income Tracking – Users can add, edit, and delete income and expense records.
Data Visualization – Charts and graphs provide visual insights into spending patterns over time.
Secure Data Storage – All financial records are stored in a PostgreSQL database for reliability and persistence.
Dockerized Environment – Both frontend and backend services are containerized using Docker and orchestrated with Docker Compose, making setup and deployment consistent and reproducible.
Technology Stack
Frontend: Nginx serving a static web interface (HTML/CSS/JS)
Backend: Node.js/Express.js API server
Database: PostgreSQL
Containerization: Docker and Docker Compose
Version Control: Git & GitHub
Architecture
The project is structured using a 3-tier architecture:
Frontend: Serves the UI and communicates with the backend via REST API.
Backend: Handles API requests, business logic, and communicates with the database.
Database: Stores user financial data, ensuring data integrity and security.
Docker Compose orchestrates all three components, ensuring they can run together seamlessly on any machine without manual configuration.
Setup and Usage
Clone the repository:
git clone https://github.com/Eliab-K/personal-finance-dashboard.git
cd personal-finance-dashboard
Build and start the services with Docker Compose:
docker compose build --no-cache
docker compose up
Access the application:
Frontend: http://localhost:80
Backend API: http://localhost:3000
Database: localhost:5432 (PostgreSQL)
Learning Outcomes
Hands-on experience with full-stack development using Node.js, PostgreSQL, and Nginx.
Proficiency in containerization with Docker and orchestration using Docker Compose.
Understanding of RESTful API design, database interactions, and secure data handling.
Exposure to integrating frontend and backend services into a cohesive, deployable application.
Future Improvements
Implement authentication and user roles for security.
Add analytics and reporting features for more advanced insights.
Improve frontend with a modern framework like React or Vue.js.
Deploy the project to a cloud platform (e.g., AWS, Heroku, or Azure).
