const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let tasks = []; // In-memory storage for now

// 🚀 GET /tasks - Retrieve all tasks
app.get('/tasks', (req, res) => {
    console.log("GET /tasks called");  // Debugging
    res.json(tasks);
});

// 🚀 POST /tasks - Create a new task
app.post('/tasks', (req, res) => {
    console.log("POST /tasks called with body:", req.body);  // Debugging

    const { title, description } = req.body;
    if (!title) {
        console.log("❌ Error: Title is required");
        return res.status(400).json({ error: 'Title is required' });
    }

    const newTask = { 
        id: Date.now(), 
        title, 
        description: description || "", 
        completed: false 
    };
    
    tasks.push(newTask);
    console.log("✅ Task created:", newTask);
    res.status(201).json(newTask);
});

// 🚀 PUT /tasks/:id - Update a task (modify or mark as completed)
app.put('/tasks/:id', (req, res) => {
    console.log("PUT /tasks/:id called with params:", req.params, "body:", req.body);  // Debugging

    const { id } = req.params;
    const { title, description, completed } = req.body;

    let task = tasks.find(task => task.id == id);
    if (!task) {
        console.log("❌ Error: Task not found");
        return res.status(404).json({ error: 'Task not found' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;

    console.log("✅ Task updated:", task);
    res.json({ message: "Task updated successfully", task });
});

// 🚀 DELETE /tasks/:id - Remove a task
app.delete('/tasks/:id', (req, res) => {
    console.log("DELETE /tasks/:id called with params:", req.params);  // Debugging

    const { id } = req.params;
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id != id);

    if (tasks.length === initialLength) {
        console.log("❌ Error: Task not found");
        return res.status(404).json({ error: "Task not found" });
    }

    console.log("✅ Task deleted");
    res.json({ message: "Task deleted successfully" });
});

// Start Server
app.listen(5000, () => console.log('Server running on port 5000 🚀'));
