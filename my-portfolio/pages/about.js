import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          Welcome to the about page. Here you can learn more about my background, experience, and skills. I am passionate about web development and design, and I strive to create high-quality, user-friendly websites and applications. Feel free to explore and get to know more about me.
        </p>
      </main>
      <Footer />
    </div>
  );
}