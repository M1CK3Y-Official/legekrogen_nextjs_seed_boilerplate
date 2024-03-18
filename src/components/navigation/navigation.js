'use client';
import Image from 'next/image';
import styles from './navigation.module.css';
import { FaBars, FaTimes, FaTruck, FaShoppingCart  } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link';
import { useBasket } from '@/context/basket';
import Basket from '@/components/basket/basket';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);  
    const [isCartOpen, setIsCartOpen] = useState(false);

    const {basket} = useBasket();

    let menu = [
        {
            name: 'Produkter',
            path: '/produkter'
        },
        {
            name: 'FAQ',
            path: '/faq'
        },
        {
            name: 'Kundeklubben',
            path: '/kundeklub'
        }
    ]

    return ( 

        <div className={styles.nav}>
            <div className={styles.shipping}>
                <p><FaTruck className={styles.truck}/>&nbsp; Fri fragt ved køb over 499,-</p>
            </div>
            <div className={styles.navBar}>
                <div className={styles.logo}>
                    <Link href={'/'}><Image src="/logo/legekrogen_logo.png" alt="logo" width={359} height={134} /></Link>
                </div>

                <div className={styles.actions}>
                    {isOpen !== true ? <FaBars className={styles.bars} onClick={ () => setIsOpen(!isOpen)} /> : <FaTimes className={styles.bars} onClick={() => setIsOpen(!isOpen)} />}

                    <div onClick={ () => setIsCartOpen(!isCartOpen)}>
                        <div className={styles.cartContainer}>
                            <FaShoppingCart className={styles.cart} style={{color : basket.length === 0 ? 'var(--color-cart-empty)' : 'var(--color-white)'}} />

                            <div className={styles.amountContainer}>
                                <p className={styles.cartAmount}>{basket.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                {menu.map((item) => {

                    return <Link key={item.name} onClick={() => setIsOpen(!isOpen)} className={styles.link} href={item.path}><div className={styles.dropdownMenu}>{item.name}</div></Link>
                })}
            </div>

            <div className={`${styles.cartDropdown} ${isCartOpen ? styles.open : ''}`} style={{minHeight : basket.length === 0 ? '0' : '50vh'}}>

                <Basket className={styles.basket} />

            </div>

        </div>

    )

}

export default Navigation;