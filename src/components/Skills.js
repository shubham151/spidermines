import styles from "@/styles/Skills.module.css";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaJava,
  FaPhp,
  FaMicrochip,
  FaTree,
  FaMicrophone,
  FaBrain,
} from "react-icons/fa";

import { AiFillBook } from "react-icons/ai";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiElasticsearch,
  SiGnubash,
  SiKubernetes,
  SiCplusplus,
  SiSpotify,
  SiPostgresql,
} from "react-icons/si";

import {
  TbApi,
  TbServer,
  TbBrandElastic,
  TbSettings,
  TbLetterC,
} from "react-icons/tb";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "ReactJS", icon: <FaReact /> },
        { name: "ExtJS", icon: <TbSettings /> },
        { name: "NextJS", icon: <SiNextdotjs /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "NodeJS", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C", icon: <TbLetterC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "Oracle", icon: <SiOracle /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "ElasticSearch", icon: <SiElasticsearch /> },
        { name: "Pinecone", icon: <FaTree /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      category: "Cloud Computing",
      skills: [{ name: "AWS", icon: <FaAws /> }],
    },
    {
      category: "Scripting",
      skills: [
        { name: "Bash", icon: <SiGnubash /> },
        { name: "Shell Script", icon: <SiGnubash /> },
        { name: "ELK", icon: <TbBrandElastic /> },
      ],
    },

    {
      category: "Frameworks & Others",
      skills: [
        { name: "GIT", icon: <FaGitAlt /> },
        { name: "Restful API Services", icon: <TbApi /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Database Optimization", icon: <FaDatabase /> },
        { name: "Data Structures & Algorithms", icon: <TbServer /> },
        { name: "OS Fundamentals", icon: <TbSettings /> },
        { name: "Software Engineering", icon: <TbSettings /> },
        { name: "Software Design Patterns", icon: <TbSettings /> },
        { name: "Back-End Web Development", icon: <TbApi /> },
        { name: "Full-Stack Development", icon: <TbApi /> },
        { name: "API Development", icon: <TbApi /> },
        { name: "MATLAB", icon: <AiFillBook /> },
        { name: "LLAMA", icon: <FaBrain /> },
        { name: "Whisper", icon: <FaMicrophone /> },
        { name: "Groq", icon: <FaMicrochip /> },
        { name: "Spotify API", icon: <SiSpotify /> },
      ],
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      {skillCategories.map((category, catIndex) => (
        <div key={catIndex} className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <div className={styles.skillsGrid}>
            {category.skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
