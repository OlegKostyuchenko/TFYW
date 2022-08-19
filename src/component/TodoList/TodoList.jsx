import React, { useState } from 'react';

const TodoList = (props) => {

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    const handleChange = (e) => {
        setNewName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newName) {
            props.editTask(props.id, newName);
            setNewName('');
            setEditing(false)
        }

    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
                <input id={props.id} className="input input__lg wInputEditing" type="text" onChange={handleChange} />
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEditing(false)}>
                    Cancel

                </button>
                <button type="submit" className="btn">
                    Save

                </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEditing(true)}>
                    Изменить
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Удалить
                </button>
            </div>
        </div>
    );



    return (
        <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    );
};

export default TodoList;