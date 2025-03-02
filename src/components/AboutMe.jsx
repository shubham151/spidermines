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
              <h2>Shubham Mishra</h2>
              <p className={styles.parah}>Software Developer Engineer with 4+ years of experience in developing innovative and scalable software solutions. Proven expertise in full-stack
development. Adept at collaborating with cross-functional teams to deliver high-quality products. Seeking a SDE role to leverage my skills and passion
for creating innovative solutions that enhance customer experiences and drive technological advancement.</p>
          </div>
      </section>
  );
}

export default About;
