import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import styles from '../style/Header.module.css';
import { FaUser, FaCode, FaBriefcase, FaEnvelope, FaLaptop, FaEye } from 'react-icons/fa';
import { TbFileText } from "react-icons/tb";

// Firebase Config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Header() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const visitorRef = ref(db, 'visitorCount');
    const hasVisited = sessionStorage.getItem("hasVisited");

    get(visitorRef).then(snapshot => {
      let count = snapshot.val() || 0;

      if (!hasVisited) {
        count += 1;
        set(visitorRef, count);
        sessionStorage.setItem("hasVisited", "true");
      }

      setVisitorCount(count);
    }).catch(error => console.error("Firebase error:", error));

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
