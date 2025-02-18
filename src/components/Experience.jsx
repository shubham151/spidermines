import { useState } from "react";
import styles from "../style/Experience.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "Lead Developer & AI/ML Engineer",
      company: "M9 Market",
      duration: "Jun 2024 - Oct 2024",
      description:
        "Developed a full-stack app with Next.js, integrating MongoDB and MySQL, while managing AWS infrastructure for scalable ML operations. Trained and fine-tuned LLAMA 3.2B LLM and implemented video transcription algorithms to boost content creation and viewer engagement.",
      tasks: [
        "Developed a full-stack app. with Next.js, integrating MongoDB and MySQL to enable seamless user interaction and efficient data management.",
        "Designed and maintained a Flask-based microservice to handle all machine learning workflows, including model training and inference.",
        "Managed AWS infrastructure, including EC2, S3, and SageMaker, to ensure scalable and reliable ML operations.",
        "Trained, fine-tuned, and aligned the LLAMA 3.2B-instruct large language model (LLM) to generate viral scripts for content creators.",
        "Augmented a vector database for Retrieval-Augmented Generation (RAG) using Pinecone to adapt to current viewer trends dynamically.",
        "Implemented video transcription algorithms to process user-generated content, boosting content creator viewership.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Vistaar Systems Pvt. Ltd.",
      duration: "Jul 2019 - Aug 2023",
      description: "As a Senior Software Engineer, I led the development of key systems using ELK, ReactJS, and Oracle, improving efficiency by 20%, and automated reporting processes. I also optimized data pipelines, implemented an ETL module, and developed strategic business solutions, while mentoring junior developers.",
      tasks: [
        "Developed and implemented a robust freight rate computation system using ELK, ReactJS, and Oracle, enabling 20% faster pricing calculations.",
        "Created automated sales reports and live dashboards using ELK, Oracle and JavaScript, reducing manual reporting time by 50%.",
        "Automated weekly reporting tasks using Python and Shell scripts, improving efficiency by 30%.",
        "Designed system architecture diagrams, algorithms, unit test plans, and business rules documents.",
        "Refactored code and optimized data pipelines, improving application performance and user experience.",
        "Developed an end-to-end ETL module using Oracle, Java and JavaScript to extract, transform and load data from PSV files received from SAP.",
        "Created a comprehensive portfolio planning module enabling rolling forecasts and strategic planning for resources and investments.",
        "Implemented a novel revenue prediction model using Oracle, JavaScript, Java and Shell, enabling automatic adjustments.",
        "Developed a versatile data visualization tool using Oracle, JavaScript and Java empowering users to gain data-driven insights.",
        "Mentored newcomers by providing comprehensive KT, accelerating their ramp up time by 50%.",
        "Led code reviews to maintain high code quality and ensure best practices.",
      ],
    },
  ];

  const [expanded, setExpanded] = useState(
    Array(experiences.length).fill(false)
  );

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
                <p className={styles.company}>
                  <strong>{exp.company}</strong> | {exp.duration}
                </p>
                <p className={styles.description}>{exp.description}</p>

                {/* Expand/Collapse Button */}
                <button
                  className={styles.toggleButton}
                  onClick={() => toggleTasks(index)}
                >
                  {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {/* Task List (Collapsible with Smooth Animation) */}
                <ul
                  className={`${styles.taskList} ${
                    expanded[index] ? styles.expanded : ""
                  }`}
                >
                  {exp.tasks.map((task, i) => (
                    <li key={i} className={styles.taskItem}>
                      {task}
                    </li>
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
