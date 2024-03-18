'use client';
import styles from './product.module.css';
import Image from 'next/image';
import { squarepegFont } from '@/utils/fonts';
import { useBasket } from '@/context/basket';

export const DiscountBox = ({percent}) => {
    return <span className={styles.percent}>{percent}%</span>
}

const Product = ({product}) => {

    const {basket, addToBasket} = useBasket();

    return (
        <div className={styles.productCard}>
            <div className={styles.productImage}>
                <Image className={styles.productPic} src={'/products/product1.jpg'} alt={product.title} width={595} height={595} />
                <div className={`${styles.productDiscount} ${squarepegFont.className}`} style={{display: product.discountInPercent > 0 ? 'block' : 'none'}}><br/><DiscountBox percent={product.discountInPercent}/></div>
            </div>

            <div className={styles.productInfo}>
                <div className={styles.productDescription}>
                    <p className={styles.productBrand}>{product.title}</p>
                    <p className={styles.productTitle}>Tandlægesæt i træ</p>
                </div>
                <p className={styles.price}>{product.price},00 kr.</p>
            </div>
                <button className={styles.productBuyBtn} onClick={() => addToBasket(product._id, product.amount)}>Køb</button>
                {/* <button className={styles.productBuyBtn}>Køb</button> */}

        </div>
    )

}

export default Product;