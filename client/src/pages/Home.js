import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';

function Home() {
    const [listOfTasks, setListOfTasks] = useState([]);

    const toggleTask = (index) => {
        const updatedTasks = [...listOfTasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setListOfTasks(updatedTasks);
    };

    useEffect(() => {
        axios.get("http://localhost:8080/tasks")
            .then((response) => {
                // Add a 'completed' field to each task when fetching
                const tasksWithCompletedFlag = response.data.map(task => ({
                    ...task,
                    completed: false,
                }));
                setListOfTasks(tasksWithCompletedFlag);
            })
            .catch((error) => {
                console.error("Error fetching tasks:", error);
            });
    }, []);

    return (
        <div className="App">
            {listOfTasks.map((value, key) => (
                <div
                    className={`task ${value.completed ? 'completed' : ''}`}
                    key={key}
                    onClick={() => toggleTask(key)}
                >
                    <div className="taskName">{value.task}</div>
                    <div className="taskText">{value.taskText}</div>
                    <div className="dueDate">{value.dueDate}</div>
                </div>
            ))}
        </div>
    );
}

export default Home;
