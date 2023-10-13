import React, { useState, useEffect } from 'react';

const ProductForm = (props) => {
    const { initTitle, initPrice, initDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initTitle);
    const [price, setPrice] = useState(initPrice);
    const [description, setDescription] = useState(initDescription);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
        setTitle('');
        setPrice('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Title</p>
            <br />
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <p>Price</p>
            <br />
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />

            <p>Description</p>
            <br />
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <br />
            <input type="submit" />
            <hr />
        </form>
    );
};

export default ProductForm;