"use client"
import Header from '@/components/header/header';
import styles from './page.module.css'
import SubscribeForm from '@/components/subscribe/subscribeForm/subscribeForm';
import Medlem from '@/components/medlem/medlem';
import { squarepegFont } from '@/utils/fonts';

export default function Page() {

    const headerConfig = {

        header: {
            forside: false,
          one: {
            text: 'Bliv medlem af vores',
            ls: '2px',
          },
          two: {
            text: 'Kundeklub',
          }
        },
    
        image: '/heros/medlem.jpg',
        w: 599,
        h: 600,

        body: {
            text: 'og få ekslusive tilbud og nyheder før alle andre',
        }
    }

  return ( 
  <div className={styles.page}>
    <Header config={headerConfig} />
        <SubscribeForm />

  </div>
  )
}

