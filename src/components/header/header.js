import Image from 'next/image';
import styles from './header.module.css'
import { squarepegFont } from '@/utils/fonts';
const Header = () => {

    return (
        <div className={styles.header}>

            <Image src="/heros/forsiden.jpg" alt="forside" width={863} height={1300} />

            <div className={styles.text}>
                <h1 className={`${styles.title} ${squarepegFont.className}`}>At lege er at leve</h1>
                <p className={styles.body}>Her hos os har vi et stort udvalg af legetøj i høj kvalitet</p>
            </div>
        </div>
    )

}

export default Header;