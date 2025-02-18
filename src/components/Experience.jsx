import styles from '../style/Experience.module.css';

function Experience() {
    const experiences = [
        { 
            title: "Lead Developer & AI/ML Engineer", 
            company: "M9 Market", 
            duration: "Jun 2024 - Oct 2024", 
            description: "Developed scalable ML solutions and managed AWS infrastructure." 
        },
        { 
            title: "Senior Software Engineer", 
            company: "Vistaar Systems Pvt. Ltd.", 
            duration: "Jul 2019 - Aug 2023", 
            description: "Built data-driven applications and automated workflows." 
        }
    ];

    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.window}>
                <div className={styles.titleBar}>
                    <span className={styles.red}></span>
                    <span className={styles.yellow}></span>
                    <span className={styles.green}></span>
                    <h2 className={styles.windowTitle}>Experience</h2>
                </div>
                
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineConnector}>
                                <div className={styles.timelineDot}></div>
                            </div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.jobTitle}>{exp.title}</h3>
                                <p className={styles.company}><strong>{exp.company}</strong> | {exp.duration}</p>
                                <p className={styles.description}>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
