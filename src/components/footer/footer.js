import styles from './footer.module.css';
import {squarepegFont} from '@/utils/fonts';
import { FaPhoneAlt, FaRegEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";


const Footer = () => {

    return (
        <footer className={styles.footer}>
            <h1 className={`${styles.title} ${squarepegFont.className}`}>Kundeservice</h1>
            <div className={styles.contact}>
                <p><FaRegEnvelope className={styles.icon}/>&nbsp;kontakt@legehjørnet.dk</p>
                <p><FaPhoneAlt className={styles.icon}/>&nbsp;+45 23 45 67 89</p>
            </div>

            <div className={styles.socials}>
                <h1 className={`${styles.title} ${squarepegFont.className}`}>Følg os</h1>
                <div className={styles.icons}>
                    <FaFacebook/>
                    <FaInstagram/>
                </div>
            </div>
        </footer>
    )

}

export default Footer;