import Head from 'next/head'
import styles from '@styles/Home.module.css'
import NavBar from '@components/NavBar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Sarthak Karandikar</title>
        <meta name="description" content="SK's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar/>
      </main>
    </>
  )
}
