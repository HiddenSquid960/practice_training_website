// filepath: my-portfolio/pages/contact.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Contact Me</h1>
        <p>This is the contact page.</p>
      </main>
      <Footer />
    </div>
  );
}