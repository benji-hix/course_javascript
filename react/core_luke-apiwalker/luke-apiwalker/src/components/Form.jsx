import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const navigate = useNavigate();

    const [ resource, setResource ] = useState('people');
    const [ id, setId ] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/sw/' + resource + '/' + id);
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <p>Search for:</p>
                <select
                    value={resource}
                    onChange={(e) => setResource(e.target.value)}
                >
                    <option value={'people'}>people</option>
                    <option value={'planets'}>planets</option>
                </select>
                <p>ID: </p>
                <input
                    type="number"
                    className="input-number"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                ></input>
                <button type="submit">Search</button>
            </form>
        </>
    );
};

export default Form;
