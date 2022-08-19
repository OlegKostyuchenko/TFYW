import React, { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            props.addTask(name);
            setName('')
        }

    }

    const handleChange = (e) => {
        setName(e.target.value);

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    КАКИЕ У ВАС ЗАДАЧИ НА СЕГОДНЯ?
                </label>
            </h1>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg ">
                Добавить
            </button>
        </form>
    );
};

export default Form;
