import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Main from './views/Main';
import OneProduct from './views/OneProduct';
import ProductUpdate from './views/ProductUpdate';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/products" element={<Main />} />
                <Route path='/products/:id' element={<OneProduct/>} />
                <Route path='/products/:id/edit' element={<ProductUpdate/>}/>
            </Routes>
        </>
    );
}

export default App;
