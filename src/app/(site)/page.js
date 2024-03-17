"use client"
import Header from '@/components/header/header';
import styles from './page.module.css'
import Products from '@/components/products/products';

export default function Home() {
  return ( 
  <div className={styles.page}>
    <Header />

    <main >
      <Products recommended={true} />
    </main>

  </div>
  )
}

