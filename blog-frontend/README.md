# Blog CMS (Mini Content Management System)

This is a simple full-stack blog application with **React** frontend and **Express + MongoDB** backend. It allows users to **create, view, edit, and delete** articles. The application uses **Bootstrap** for styling and includes **basic HTTP authentication** for secure access to API routes.

---

## 🛠️ Project Setup

### 🔧 Backend Setup (blog-backend)

- Built with: Node.js, Express, MongoDB (via Mongoose)
- Features: REST API for Articles with Basic Authentication

#### Install Dependencies

```bash
cd blog-backend
npm install
Run the Backend Server
bash
Copy
Edit
node index.js
Backend will run at:
📍 http://localhost:3000

🎨 Frontend Setup (blog-frontend)
Built with: React

Features: CRUD UI, Bootstrap UI, Axios calls to secured API

Runs on: Port 3001 by default

Install Dependencies
bash
Copy
Edit
cd blog-frontend
npm install
Set Custom Port (Optional)
Create a file named .env in blog-frontend/ and add:

env
Copy
Edit
PORT=3001
Run the React App
bash
Copy
Edit
npm start
Frontend will run at:
📍 http://localhost:3001

🔐 Basic Authentication
All backend API routes are protected with Basic Auth.

Username	Password
admin	admin123

Axios requests from frontend include these credentials automatically.

📦 Available Scripts (Frontend)
In the blog-frontend directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3001 in your browser.

npm run build
Builds the app for production to the build folder.

npm test
Launches the test runner in interactive watch mode.

🧪 API Endpoints (Backend)
All endpoints require basic auth.

Method	Endpoint	Description
GET	/api/articles	Fetch all articles
POST	/api/articles	Create a new article
PUT	/api/articles/:id	Update an article
DELETE	/api/articles/:id	Delete an article

✨ Features
✅ Full CRUD for blog articles
✅ MongoDB integration with Mongoose
✅ Axios communication between frontend and backend
✅ Bootstrap 5 UI for forms and lists
✅ Basic HTTP Authentication
✅ Custom port configuration via .env

🧠 Learn More
React Documentation

Express Documentation

MongoDB Docs

Bootstrap Docs

Basic Auth in Express

🚀 Future Improvements
JWT-based Authentication

User accounts

Markdown editor for articles

Pagination and search

💻 Screenshots
(Add your screenshots here showing the UI for creating/editing/deleting articles)

👨‍💻 Developed By
Emmanual Thomas
React + Express Fullstack Mini CMS Project