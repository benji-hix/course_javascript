import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (update) => {
        setTasks(tasks.concat(update));
    };

    const deleteTask = (index) => {
        setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
    };

    const find = (object) => {
        return tasks.indexOf(object);
    };

    return (
        <>
            <div className="view-main">
                <Form addTask={addTask} />

                {tasks.map((task, index) => {
                    return (
                        <List
                            key={index}
                            task={task}
                            index={find(task)}
                            deleteTask={deleteTask}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;
