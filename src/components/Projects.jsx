import styles from '../style/Projects.module.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      name: "Fix for RTL8821CE Driver Issue",
      description: "Revamped Wi-Fi drivers for Ubuntu, gaining recognition on AskUbuntu.",
      link: "#"
    },
    {
      name: "Ongaku",
      description: "An AI-driven music recommender for TikTok videos.",
      link: "#"
    },
    {
      name: "PseudocodeDiffing",
      description: "Developed a Ghidra plugin for reverse engineering binaries.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} className={styles.projectLink}>
              View More <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
