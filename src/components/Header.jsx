import styles from '../style/Header.module.css';
import { FaUser, FaCode, FaBriefcase, FaEnvelope, FaLaptop, FaHome } from 'react-icons/fa';
import { MdOutlineSettings } from 'react-icons/md';

function Header() {
  return (
    <nav className={styles.dock}>
      <div className={styles.dockIcons}>
        <a href="#" className={styles.dockItem}><FaHome size={28} /><span>Home</span></a>
        <a href="#about" className={styles.dockItem}><FaUser size={28} /><span>About</span></a>
        <a href="#skills" className={styles.dockItem}><FaCode size={28} /><span>Skills</span></a>
        <a href="#projects" className={styles.dockItem}><FaBriefcase size={28} /><span>Projects</span></a>
        <a href="#experience" className={styles.dockItem}><FaLaptop size={28} /><span>Experience</span></a>
        <a href="#contact" className={styles.dockItem}><FaEnvelope size={28} /><span>Contact</span></a>
      </div>
      <div className={styles.dockBottom}>
        <a href="#" className={styles.dockItem}><MdOutlineSettings size={28} /><span>Settings</span></a>
      </div>
    </nav>
  );
}

export default Header;
