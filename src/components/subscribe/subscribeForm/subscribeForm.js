import styles from './subscribeForm.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { squarepegFont } from '@/utils/fonts';



const SubscribeForm = ({setFormSubmitted, setSubscriberName}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        let dataToSend = {
            'name': e.target.name.value,
            'email': e.target.email.value,
            'message': e.target.message.value,
        }

        fetch(`/api/subscriber`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend),
        }).then(res => res.json()).then(data => {
            console.log(data.data);
            setSubscriberName(data.data.name);
            setFormSubmitted(true);
        
        });

    };

    return ( <div>
            <form className={styles.form} id='form' onSubmit={handleSubmit}>
                <input className={squarepegFont.className} name='name' type='text' placeholder='Fulde navn' />

                <input className={squarepegFont.className} type="email" name='email' placeholder='Email' />

                <textarea className={squarepegFont.className} name='message' placeholder='Hvem køber du legetøj til?'></textarea>

                <button className={styles.submitBtn}  type="submit">Bliv medlem nu!</button>
            </form>



        </div>
    )

}

export default SubscribeForm;