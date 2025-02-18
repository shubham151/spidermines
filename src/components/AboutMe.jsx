import styles from '../style/AboutMe.module.css';

function About() {
  return (
      <section id="about" className={styles.window}>
          <div className={styles.titleBar}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
          </div>
          <div className={styles.content}>
              <h2>About Me</h2>
              <p>I am a Software Developer Engineer with 4+ years of experience in full-stack development, AI/ML, and cloud technologies. Passionate about building scalable applications.</p>
          </div>
      </section>
  );
}

export default About;
