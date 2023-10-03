import React, {useState} from 'react';

const List = (props) => {
    const [checked, setChecked] = useState(false);

    const handleDelete = (index) => {
        props.deleteTask(index);
    }

    
    return (
        <>
            <div className="container-task">
                { (!checked)
                 ? <p>{props.task}</p>
                 : <p style={{textDecoration: 'line-through'}}>{props.task}</p>
                }   
                <input type='checkbox' onChange={ e => setChecked(e.target.checked)} checked={checked} />
                <button onClick={() => handleDelete(props.index)}>Delete</button>
            </div>
        </>
    );
};

export default List;
