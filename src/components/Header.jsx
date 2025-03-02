import { useEffect, useState } from 'react';
import styles from '../style/Header.module.css';
import { FaUser, FaCode, FaBriefcase, FaEnvelope, FaLaptop, FaEye } from 'react-icons/fa';
import { TbFileText } from "react-icons/tb";

function Header() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited"); // Check if the session flag exists
    if (!hasVisited) {
      let count = localStorage.getItem("visitorCount") || 0;
      count = parseInt(count) + 1;
      localStorage.setItem("visitorCount", count);
      sessionStorage.setItem("hasVisited", "true"); // Set session flag to prevent double count
      setVisitorCount(count);
    } else {
      setVisitorCount(localStorage.getItem("visitorCount") || 0);
    }
  }, []);

  return (
    <nav className={styles.dock}>
      <div className={styles.dockIcons}>
        <a href="/spidermines/ShubhamMishra_Resume.pdf" className={styles.dockItem}><TbFileText size={28} /><span>Resume</span></a>
        <a href="#about" className={styles.dockItem}><FaUser size={28} /><span>About</span></a>
        <a href="#skills" className={styles.dockItem}><FaCode size={28} /><span>Skills</span></a>
        <a href="#projects" className={styles.dockItem}><FaBriefcase size={28} /><span>Projects</span></a>
        <a href="#experience" className={styles.dockItem}><FaLaptop size={28} /><span>Experience</span></a>
        <a href="#contact" className={styles.dockItem}><FaEnvelope size={28} /><span>Contact</span></a>
      </div>
      <div className={styles.dockBottom}>
        <span className={styles.visitorCount}>
          <FaEye size={20} className={styles.eyeIcon} />
          Visitors <span className={styles.counter}>{visitorCount}</span>
        </span>
      </div>
    </nav>
  );
}

export default Header;
