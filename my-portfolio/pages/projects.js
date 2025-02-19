import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.projectList}>
          <ProjectCard title="Project 1" description="Description of project 1" />
          <ProjectCard title="Project 2" description="Description of project 2" />
        </div>
      </main>
      <Footer />
    </div>
  );
}