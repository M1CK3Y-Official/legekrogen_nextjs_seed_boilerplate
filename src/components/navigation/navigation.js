'use client';
import Image from 'next/image';
import styles from './navigation.module.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);  

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
                <Link href={'/'}><div className={styles.dropdownMenu}>Hej</div></Link>
            </div>

        </div>

    )

}

export default Navigation;