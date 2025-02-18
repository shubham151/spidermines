import styles from '../style/AboutMe.module.css';

function About() {
  return (
      <section id="about" className={styles.about}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
              I am a Software Developer Engineer with 4+ years of experience in full-stack development, AI/ML, and cloud technologies.
              Passionate about building innovative applications that enhance user experience.
          </p>
      </section>
  );
}

export default About;
