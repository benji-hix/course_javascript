import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form from './components/form';
import People from './components/People';
import Planets from './components/Planets'

function App() {


    return (
        <>
        <div className='view-main'>
            <Form />
            <Routes>
                <Route path="/sw/people/:id" element={<People />} />
                <Route path="/sw/planets/:id" element={<Planets />} />
            </Routes>
        </div>
        </>
    );
}

export default App;
