import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:5000/tasks";

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await axios.get(API_URL);
        setTasks(res.data);
    };

    const addTask = async () => {
        if (!title) return;
        await axios.post(API_URL, { title });
        fetchTasks();
        setTitle("");
    };

    const deleteTask = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        fetchTasks();
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder="Add task..."
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title} 
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
