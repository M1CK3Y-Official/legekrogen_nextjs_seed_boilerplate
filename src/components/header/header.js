import Image from 'next/image';
import styles from './header.module.css'
import { squarepegFont } from '@/utils/fonts';

const Header = ({config}) => {

    return (
        <div className={styles.header}>

            <Image src={config.image} alt="forside" width={config.w} height={config.h} />
            
            <div className={`${styles.text} ${config.header?.forside === true ? styles.forside : ''}`}>
                <h1 className={`${styles.title} ${squarepegFont.className}`} style={{fontSize : config.header.one?.size, letterSpacing : config.header.one?.ls}} >{config.header.one.text}</h1>
                {config.header?.two ? <h1 className={`${styles.title} ${styles.two}`}>{config.header?.two.text}</h1> : ''}

                {config?.body ? <p className={styles.body}>{config?.body.text}</p> : ''}
            </div>

        </div>
    )

}

export default Header;