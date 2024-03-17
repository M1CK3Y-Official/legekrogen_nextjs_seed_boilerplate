'use client';
import styles from './products.module.css';
import Product from './product/product';
import { useState, useEffect } from 'react';
import { squarepegFont } from '@/utils/fonts';

const Products = ({recommended}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            
            const response = await fetch('/api/products');
            const data = await response.json();
            let filteredData = recommended ? data.filter((product) => product.recommended === true) : data;
            setProducts(filteredData);
        }
        getProducts();

    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 className={`${styles.heading1} ${squarepegFont.className}`}>Et udpluk af vores</h1>
                <h1 className={styles.heading2}>legetøj</h1>
            </div>

            <div className={styles.list}>
                {products.map((product) => (
                    <Product key={product._id} product={product} />
                    ))}
            </div>
        </div>
    )

}

export default Products;