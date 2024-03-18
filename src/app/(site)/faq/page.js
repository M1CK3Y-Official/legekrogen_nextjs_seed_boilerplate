"use client"
import Header from '@/components/header/header';
import styles from './page.module.css'
import Products from '@/components/products/products';
import Medlem from '@/components/medlem/medlem';

export default function Page() {

    const headerConfig = {

        header: {
            forside: false,
          one: {
            text: 'På udkig efter nyt',
            ls: '2px',
          },
          two: {
            text: 'Legetøj?',
          }
        },
    
        image: '/heros/produkter.jpg',
        w: 1064,
        h: 1064,
    
        bodyBackground: 'var(--color-light-pink)',
    }

  return ( 
  <div className={styles.page}>
    <Header config={headerConfig} />
      <Medlem />

  </div>
  )
}

