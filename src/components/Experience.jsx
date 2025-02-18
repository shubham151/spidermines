import { useState } from 'react';
import styles from '../style/Experience.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Experience() {
    const experiences = [
        { 
            title: "Lead Developer & AI/ML Engineer", 
            company: "M9 Market", 
            duration: "Jun 2024 - Oct 2024", 
            description: "Developed scalable ML solutions and managed AWS infrastructure.",
            tasks: [
                "Designed and optimized scalable ML pipelines.",
                "Managed AWS cloud infrastructure and cost optimization.",
                "Integrated AI-driven analytics into business workflows.",
                "Developed CI/CD pipelines for automated deployments.",
                "Worked on anomaly detection using deep learning models."
            ]
        },
        { 
            title: "Senior Software Engineer", 
            company: "Vistaar Systems Pvt. Ltd.", 
            duration: "Jul 2019 - Aug 2023", 
            description: "Built data-driven applications and automated workflows.",
            tasks: [
                "Designed RESTful APIs for microservices architecture.",
                "Implemented database optimizations for better performance.",
                "Developed real-time data processing solutions.",
                "Worked with Kubernetes for container orchestration.",
                "Led a team of developers to deliver scalable backend services."
            ]
        }
    ];

    const [expanded, setExpanded] = useState(Array(experiences.length).fill(false));

    const toggleTasks = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

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

                                {/* Expand/Collapse Button */}
                                <button 
                                    className={styles.toggleButton} 
                                    onClick={() => toggleTasks(index)}
                                >
                                    {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
                                </button>

                                {/* Task List (Collapsible with Smooth Animation) */}
                                <ul className={`${styles.taskList} ${expanded[index] ? styles.expanded : ""}`}>
                                    {exp.tasks.map((task, i) => (
                                        <li key={i} className={styles.taskItem}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
