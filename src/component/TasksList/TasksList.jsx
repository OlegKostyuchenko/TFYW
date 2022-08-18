import React, { useState } from 'react';
import FilterButton from '../FilterButton';
import Form from '../Form/Form';
import TodoList from '../TodoList';
import { nanoid } from "nanoid";
import './TasksList.css';

const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

const TasksList = (props) => {
    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState('All');


    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            }
            return task;
        });
        setTasks(updatedTasks)
        console.log(tasks[1])
    }


    const addTask = (name) => {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id) => {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    const editTask = (id, newName) => {
        const editedTaskList = tasks.map((task) => {

            if (id === task.id) {
                //
                return { ...task, name: newName }
            }
            return task;
        });
        setTasks(editedTaskList)
    }

    const taskList = tasks
        .filter(FILTER_MAP[filter])
        .map((task) => (
            <TodoList
                key={task.id}
                id={task.id}
                name={task.name}
                completed={task.completed}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask} />
        ));

    const filterList = FILTER_NAMES.map((name) => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter} />
    ));

    const tasksNoun = () => {
        if (taskList.length === 1) {
            return 'задача'
        } else if (taskList.length === 2 || taskList.length === 3 || taskList.length === 4) {
            return 'задачи'
        } else {
            return 'задач'
        }
    }

    const headingText = `${taskList.length} ${tasksNoun()}`;


    return (
        <div className="tasksToday">
            <h1>ЗАДАЧИ НА СЕГОДНЯ</h1>
            <Form addTask={addTask} />
            <div className="filters btn-group stack-exception">
                {filterList}
            </div>
            <h2 id="list-heading">{headingText}</h2>
            <ul
                className="todo-list stack-large stack-exception"

            >
                {taskList}

            </ul>
        </div>

    );
};

export default TasksList;

// const [valueInput, setValueInput] = useState(props.textInput);
// const [arrTasks, setArrTasks] = useState([]);
// const [checked, setChecked] = useState(false)

// const submitFom = (event) => {
//     event.preventDefault();
//     if (valueInput) {
//         setArrTasks([...arrTasks, valueInput]);
//         setValueInput('')
//     }
// }
// console.log(checked);
// <div className='tasksList'>
//             <form onSubmit={submitFom}>
//                 <input value={valueInput}
//                     onClick={() => setValueInput('')}
//                     onChange={e => setValueInput(e.target.value)}>
//                 </input>
//                 <button type='submit'>Добавить задачу</button>
//             </form>
//             <ol>
//                 {arrTasks.map((item, index) => (
//                     <div className='task'>
//                         <input type='checkbox' checked={checked} onChange={e => setChecked(e.target.checked)} />
//                         <li key={index}>{item}</li>

//                     </div>
//                 ))}
//             </ol>
//         </div>