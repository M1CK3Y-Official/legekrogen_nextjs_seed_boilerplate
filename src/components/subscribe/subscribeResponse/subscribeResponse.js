import { squarepegFont } from "@/utils/fonts"
import styles from "./subscribeResponse.module.css"
import Image from "next/image"
import Link from "next/link"

const SubscribeResponse = ({name}) => {

    return (

        <div className={styles.container}>
                <h1 className={`${styles.title} ${squarepegFont.className}`}>Tak!</h1>
                <div className={styles.name}>{name}</div>

                <p className={styles.message}>Vi er så glade for at du vil være en del af vores kundeklub. <br/><br/>Tag et kig i din inbakke. Vi har givet dig fri fragt på din første ordre.</p>

                <Link href={'/'}><button className={styles.btn}>Til Forsiden</button></Link>
            </div>

    )

}

export default SubscribeResponse;