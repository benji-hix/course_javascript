import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const ProductUpdate = (props) => {

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    //* js.
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products/' + id)
            .then((res) => {
                console.log(res.data.oneProduct)
                setTitle(res.data.oneProduct.title);
                setPrice(res.data.oneProduct.price);
                setDescription(res.data.oneProduct.description);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    const updateProduct = (product) => {
        axios
            .patch('http://localhost:8000/api/products/' + id, product)
            .then((res) => {
                console.log('product updated');
                navigate('/products/' + id)
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            {loaded && (<ProductForm onSubmitProp={updateProduct} initPrice={price} initTitle={title} initDescription={description}/>
            )}
        </>
    );
};

export default ProductUpdate;
