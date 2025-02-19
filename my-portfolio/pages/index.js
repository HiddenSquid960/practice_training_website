// filepath: my-portfolio/pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>
          Showcasing my projects and skills. 
          Here you will find a collection of my work, 
          including web development projects, design work, 
          and other creative endeavors. 
          Feel free to explore and learn more about what I do.
        </p>
      </main>

      <Footer />
    </div>
  );
}