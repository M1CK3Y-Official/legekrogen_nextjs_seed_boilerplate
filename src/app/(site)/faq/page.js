"use client"
import Header from '@/components/header/header';
import styles from './page.module.css'
import Accordions from '@/components/accordions/accordions';
import Medlem from '@/components/medlem/medlem';

export default function Page() {

    const headerConfig = {

        header: {
            forside: false,
          one: {
            text: 'Har du nogle',
            ls: '2px',
          },
          two: {
            text: 'Spørgsmål?',
          }
        },
    
        image: '/heros/FAQ.jpg',
        w: 395,
        h: 595,

        body: {
            text: 'Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os',
        },
    
        bodyBackground: 'var(--color-light-pink)',
    }

  return ( 
  <div className={styles.page}>
    <Header config={headerConfig} />
        <Accordions />
        <Medlem />

  </div>
  )
}

