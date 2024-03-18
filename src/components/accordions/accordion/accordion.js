'use client';
import { useState } from "react";
import styles from './accordion.module.css';
import { FaChevronDown } from "react-icons/fa";

const Accordion = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>

            <div className={styles.wrapper}>

                <div className={styles.accordion} onClick={ () => setIsOpen(!isOpen) }>
                    <h1 className={styles.title}>{question}</h1>
                    <FaChevronDown className={`${styles.icon} ${isOpen ? styles.open : ''}`}></FaChevronDown>
                </div>

                <hr className={`${styles.hr} ${isOpen ? styles.open : ''}`} />

                <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                    <span className={`${styles.answer} ${isOpen ? styles.open : ''}`} dangerouslySetInnerHTML={{__html:answer}}></span>
                </div>

            </div>

        </div>
    )

}


export default Accordion;