# Task Manager Web Application

🚀 A **Full-Stack Task Management App** built with **React (Frontend) & Node.js/Express (Backend)**, featuring task creation, updating, deletion, and completion tracking.

## 📌 Features  
✅ Create, Edit, Delete, and Mark Tasks as Completed  
✅ RESTful API with Express.js  
✅ Frontend UI built with React  
✅ Uses JSON-based storage (or SQLite for persistence)  
✅ Cross-Origin Resource Sharing (CORS) enabled  

---

## 📁 Project Structure  
```
task-manager/
│── backend/              # Node.js & Express Backend
│   ├── server.js         # Main server file
│   ├── routes/           # API routes
│   │   ├── tasks.js      # Task-related API endpoints
│   ├── models/           # Data model (if using SQLite)
│   │   ├── taskModel.js
│   ├── package.json      # Backend dependencies & scripts
│
│── frontend/             # React Frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # React pages
│   │   ├── App.js        # Main app file
│   │   ├── index.js      # React entry file
│   ├── public/index.html # React root HTML
│   ├── package.json      # Frontend dependencies
│
│── README.md             # Project documentation
│── .gitignore            # Ignore unnecessary files
```

---

## 🛠 Tech Stack  
- **Frontend**: React, Axios  
- **Backend**: Node.js, Express.js  
- **Database**: JSON-based storage (or SQLite)  
- **Others**: CORS, Body-Parser  

---

## 🚀 Installation & Setup  
### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2️⃣ Setup Backend  
```sh
cd backend
npm install
node server.js  # Runs the backend on port 5000
```

### 3️⃣ Setup Frontend  
```sh
cd ../frontend
npm install
npm start  # Runs the frontend on port 3000
```

---

## 📡 API Endpoints  
| Method | Endpoint       | Description                 |
|--------|--------------|-----------------------------|
| `GET`  | `/tasks`      | Fetch all tasks            |
| `POST` | `/tasks`      | Add a new task             |
| `PUT`  | `/tasks/:id`  | Update task (title, status)|
| `DELETE` | `/tasks/:id` | Remove a task              |

Example **POST Request (JSON Body)**:  
```json
{
  "title": "Complete Assignment",
  "description": "Finish React and Node.js project"
}
```

---

## 📸 Screenshots  
🌟 **Frontend UI Preview**  
present in the project folder

---

## 🌍 Deployment (Optional)  
To deploy:  
- Use **Vercel** for frontend  
- Use **Railway / Render / Heroku** for backend  

---

## 📝 Notes  
- **Make sure Backend (Port 5000) is running** before using Frontend.  
- Use **Postman or cURL** to test API.  

---

## 📜 License  
This project is **MIT Licensed** – feel free to modify & improve! 🚀  

---

## 👨‍💻 Author  
👤 **ANISHKUMARBEHERA**  
📧 anish.behera2020@gmail.com
