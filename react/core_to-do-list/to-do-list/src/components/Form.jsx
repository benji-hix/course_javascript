import React, { useState } from 'react';

const Form = (props) => {
    const [text, setText] = useState('');
    const [tasks, tasksSet] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(text)
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input-text"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                ></input>
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default Form;
