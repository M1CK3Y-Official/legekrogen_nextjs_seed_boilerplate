'use client';
import styles from './subscribeForm.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { squarepegFont } from '@/utils/fonts';


const SubscribeForm = ({setFormSubmitted, setSubscriberName}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        // let dataToSend = {
        //     name: e.target.name.value,
        //     email: e.target.email.value,
        //     message: e.target.message.value,
        // }

        // fetch(`/api/subscriber`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataToSend),
        // }).then(res => res.json()).then(data => {
        //     console.log(data);
        //     setSubscriberName(data.name);
        //     setFormSubmitted(true);
        
        // });

    };

    return ( <div>
            <form className={styles.form} id='form' onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <input className={squarepegFont.className} type="text" name='name' placeholder='Fulde navn' required/>
                </div>

                <div className={styles.field}>
                    <input className={squarepegFont.className} type="email" name='email' placeholder='Email' required/>
                </div>

                <div className={styles.field}>
                    <textarea className={squarepegFont.className} name='message' placeholder='Hvem køber du legetøj til?'></textarea>
                </div>

                <button className={styles.submitBtn}  type="submit">Bliv medlem nu!</button>
            </form>



        </div>
    )

}

export default SubscribeForm;