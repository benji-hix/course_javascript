import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {removeFromDom} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch( err => console.error(err))
    }

    return (
        <>
        {props.products.map((oneProduct) => {
                return (<div className="container-product" key={oneProduct._id}>
                    <p>
                        <b>Title: </b>
                        <Link to={'/products/' + oneProduct._id}>
                            {oneProduct.title}
                        </Link>
                    </p>
                    <p>
                        <b>Price: $</b>
                        {oneProduct.price}
                    </p>
                    <p>
                        <b>Description: </b>
                        {oneProduct.description}
                    </p>
                    <button onClick={ e => {deleteProduct(oneProduct._id)}}>Delete</button>
                    <hr/>
                </div>
        )})
        }
        </>
    )
}

export default ProductList