'use client';
import Image from 'next/image';
import styles from './navigation.module.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);  

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
            <div className={styles.navBar}>
                <div className={styles.logo}>
                    <Image src="/logo/legekrogen_logo.png" alt="logo" width={359} height={134} />
                </div>

                <div className={styles.actions}>
                    {isOpen !== true ? <FaBars className={styles.bars} onClick={ () => setIsOpen(!isOpen)} /> : <FaTimes className={styles.bars} onClick={() => setIsOpen(!isOpen)} />}
                </div>
            </div>

            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                {menu.map((item) => {

                    return <Link key={item.name} className={styles.link} href={item.path}><div className={styles.dropdownMenu}>{item.name}</div></Link>
                })}
            </div>

        </div>

    )

}

export default Navigation;