import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Douglas Matos
        </h1>

        <p className={styles.description}>
         Father, husband, brother and software developer.
        </p>

      </main>
    </div>
  )
}

export default Home
