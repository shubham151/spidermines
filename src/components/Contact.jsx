import styles from '../style/Contact.module.css';

function Contact() {
  return (
      <section id="contact" className={styles.contact}>
          <h2 className={styles.title}>Contact Me</h2>
          <p className={styles.info}>Email: <a href="mailto:smish040@ucr.edu" className={styles.link}>smish040@ucr.edu</a></p>
          <p className={styles.info}>LinkedIn: <a href="https://linkedin.com/in/spidermines" className={styles.link}>linkedin.com/in/spidermines</a></p>
          <p className={styles.info}>GitHub: <a href="https://github.com/shubham151" className={styles.link}>github.com/shubham151</a></p>
      </section>
  );
}

export default Contact;
