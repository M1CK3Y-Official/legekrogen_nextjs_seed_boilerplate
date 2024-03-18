import styles from './medlem.module.css'
import { squarepegFont, quicksandFont } from '@/utils/fonts';
import Link from 'next/link';

const Medlem = () => {

    return (
        <div className={styles.container}>
            <p className={styles.subHeading}>Kunne du også tænke dig at blive medlem af vores</p>
            <h1 className={`${styles.heading} ${squarepegFont.className}`}>Kundeklub</h1>

            <Link href={'/kundeklub'}><button className={`${styles.button} ${quicksandFont.className}`}>Bliv medlem Nu!</button></Link>
        </div>
    )

}

export default Medlem;