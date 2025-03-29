import styles from "@/styles/Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.terminal}>
      <p>
        <span className={styles.prompt}>$</span> Email:{" "}
        <a href="mailto:smish040@ucr.edu" className={styles.link}>
          smish040@ucr.edu
        </a>
      </p>
      <p>
        <span className={styles.prompt}>$</span> LinkedIn:{" "}
        <a href="https://linkedin.com/in/spidermines" className={styles.link}>
          linkedin.com/in/spidermines
        </a>
      </p>
      <p>
        <span className={styles.prompt}>$</span> GitHub:{" "}
        <a href="https://github.com/shubham151" className={styles.link}>
          github.com/shubham151
        </a>
      </p>
    </section>
  );
}

export default Contact;
