import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const OneProduct = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products/' + id)
            .then((res) => {
                setProduct(res.data.oneProduct);
                console.log(product);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                navigate('/products')
            })
            .catch( err => console.error(err))
    }

    return (
        <>
            {product && (
                <div className="container-product">
                    <p>
                        <b>Title: </b>
                        {product.title}
                    </p>
                    <p>
                        <b>Price: </b>
                        {product.price}
                    </p>
                    <p>
                        <b>Description: </b>
                        {product.description}
                    </p>
                    <p>
                        <Link to={'/products/' + product._id + '/edit'}>Edit</Link>
                    </p>
                    <p>
                        <button onClick={ e => {deleteProduct(product._id)}}>Delete</button>
                    </p>
                </div>
            )}
            <p>
                <Link to={'/products'}>
                    Back to all Products
                </Link>
            </p>
        </>
    );
};

export default OneProduct;
