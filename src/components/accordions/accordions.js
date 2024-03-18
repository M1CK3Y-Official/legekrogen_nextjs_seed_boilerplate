'use client';
import Accordion from "./accordion/accordion";
import { useState, useEffect } from "react";
import styles from './accordions.module.css';

const Accordions = () => {

    const [accordions, setAccordions] = useState([]);

    useEffect(() => {

        const getQuestions = async () => {
            const response = await fetch('/api/questions');
            const data = await response.json();
            setAccordions(data);
        }

        getQuestions();

    }, []);

    return (
        <div className={styles.list}>
            {accordions.map((accordion) => {
                return <Accordion key={accordion._id} question={accordion.question} answer={accordion.answer} />
            
            })}
        </div>
    )

}


export default Accordions;