"use client"
import Header from '@/components/header/header';
import styles from './page.module.css'
import Products from '@/components/products/products';
import Reviews from '@/components/reviews/reviews';
import Medlem from '@/components/medlem/medlem';

export default function Home() {

  const headerConfig = {

    header: {
      forside: true,
      one: {
        text: 'At lege er at leve',
        size: 'var(--font-heading)',
      }
    },

    image: '/heros/forsiden.jpg',
    w: 863,
    h: 1300,

    body: {
      text: 'Her hos os har vi et stort udvalg af legetøj i høj kvalitet',
    },
    bodyBackground: 'var(--color-light-pink)',
  }

  return ( <div>
    <Header config={headerConfig} />
      <div className={styles.page}>
        <Products recommended={true} />
        <Reviews />
        <Medlem />
      </div>
  </div>
  )
}

