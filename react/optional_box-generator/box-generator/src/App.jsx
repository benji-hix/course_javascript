import './App.css';
import Form from './components/Form';
import { useState } from 'react';

function App() {
    const [boxes, setBoxes] = useState([]);

    const changeBoxesState = (boxArray) => {
        setBoxes(boxes.concat(boxArray));
    };

    return (
        <>
            <div className="view-main">
                <Form changeBoxesState={changeBoxesState} />
                <div className="container-display">
                    { boxes.map((boxDiv, idx) => {
                      return <div key={idx} style={{ backgroundColor: boxDiv}} className='box'></div>
                    })
                    }
                </div>
            </div>
        </>
    );
}

export default App;

