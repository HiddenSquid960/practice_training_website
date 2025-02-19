// filepath: my-portfolio/components/ProjectCard.js
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ title, description }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}