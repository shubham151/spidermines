import styles from '../style/Skills.module.css';

function Skills() {
    const skills = [
        { name: "JavaScript", icon: "🟨" },
        { name: "ReactJS", icon: "⚛️" },
        { name: "NodeJS", icon: "🟩" },
        { name: "Python", icon: "🐍" },
        { name: "SQL", icon: "🗄️" },
        { name: "MongoDB", icon: "🍃" },
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸️" }
    ];

    return (
        <section id="skills" className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <span className={styles.skillIcon}>{skill.icon}</span>
                        <span className={styles.skillName}>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
