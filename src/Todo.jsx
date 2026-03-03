import React, { useState } from 'react';

const Todo = () => {
    const [task, setTask] = useState("");  // Renamed Interest to task for clarity
    const [taskList, setTaskList] = useState([]);

    const addTask = () => {
        if (!task.trim()) {
            alert("Please enter a task.");
            return;
        }

        if (taskList.some(existingTask => existingTask.toLowerCase() === task.toLowerCase().trim())) {
            alert("Duplicate tasks are not allowed.");
            setTask("");
            return;
        }

        setTaskList([...taskList, task]);
        setTask("");
    };

    const deleteTask = (index) => {
        setTaskList(taskList.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div className="container-fluid py-5">
            <div className="container d-flex justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10 col-12 outerDiv shadow-sm p-4 rounded">
                    <div className="text-center mb-4">
                        <h1 className="display-4">ToDo List</h1>
                    </div>

                    <div className="mb-4">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Enter Task"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="form-control border-primary rounded-0"
                            />
                            <button
                                type="button"
                                className="btn btn-success px-4 ms-2 rounded-0"
                                onClick={addTask}
                            >
                                ADD
                            </button>
                        </div>
                    </div>

                    {taskList.length === 0 ? (
                        <div className="alert alert-danger text-center">No Task Available</div>
                    ) : (
                        <ul className="list-group">
                            {taskList.map((item, index) => (
                                <li
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm rounded"
                                >
                                    <span>{item}</span>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteTask(index)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Todo;
