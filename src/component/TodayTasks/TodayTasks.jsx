import React from 'react';
import TasksList from '../TasksList';
import './TodayTasks.css'
const TodayTasks = () => {

    const DATA = [
        { id: "todo-0", name: "Eat", completed: true },
        { id: "todo-1", name: "Sleep", completed: false },
        { id: "todo-2", name: "Repeat", completed: false }
    ];

    // const handleChange = (e) => setValueInput({ e.target.value })

    return (
        <div>
            <TasksList tasks={DATA} />

            <input type='checkbox' />
        </div>
    );
};

export default TodayTasks;