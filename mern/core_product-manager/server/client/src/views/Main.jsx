import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [productList, setProductList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((res) => {
                setProductList(res.data.allProducts);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    const createProduct = product => {
        axios
        .post('http://localhost:8000/api/products', product)
        .then((res) => {
            setProductList([...productList, res.data])
        })
        .catch((err) => console.log(err));
    }

    const removeFromDom = productId => {
        setProductList(productList.filter(product => product._id != productId))
    }

    return (
        <>
            <ProductForm onSubmitProp={createProduct} initTitle='' initPrice='' initDescription=''/>
            <hr />
            {loaded && <ProductList products={productList} removeFromDom={removeFromDom}/>}
        </>
    );
};

export default Main;
