import styles from '../style/Header.module.css';
import { useState, useEffect } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      let current = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Shubham Mishra</h1>
      <nav className={styles.nav}>
        <a href="#about" className={activeSection === 'about' ? styles.active : styles.navLink}>About</a>
        <a href="#skills" className={activeSection === 'skills' ? styles.active : styles.navLink}>Skills</a>
        <a href="#projects" className={activeSection === 'projects' ? styles.active : styles.navLink}>Projects</a>
        <a href="#experience" className={activeSection === 'experience' ? styles.active : styles.navLink}>Experience</a>
        <a href="#contact" className={activeSection === 'contact' ? styles.active : styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
