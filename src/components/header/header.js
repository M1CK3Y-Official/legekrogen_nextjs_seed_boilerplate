import Image from 'next/image';
import styles from './header.module.css'
const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.hero}>
                <Image src="/heros/forsiden.jpg" alt="forside" width={863} height={1300} />
            </div>
        </div>
    )

}

export default Header;