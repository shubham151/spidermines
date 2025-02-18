import styles from '../style/Projects.module.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

function Projects() {
  const projects = [
    { name: "Fix for RTL8821CE", description: "Revamped Wi-Fi drivers for Ubuntu.", link: "#", command: "cd Fix-for-RTL8821CE" },
    { name: "Ongaku", description: "An AI-driven music recommender.", link: "#", command: "cd Ongaku" },
    { name: "PseudocodeDiffing", description: "Ghidra plugin for reverse engineering.", link: "#", command: "cd PseudocodeDiffing" }
  ];

  const [terminalOutput, setTerminalOutput] = useState([]);
  const [command, setCommand] = useState("");

  const handleCommandSubmit = (event) => {
    event.preventDefault();
    let output = `$ ${command}`;

    const project = projects.find(p => command === p.command);
    if (project) {
      output += `\nOpening ${project.name}...\n`;
      window.open(project.link, "_blank"); // Open project link
    } else if (command === "ls") {
      output += "\n" + projects.map(p => p.name).join("\n");
    } else if (command === "clear") {
      setTerminalOutput([]);
      setCommand("");
      return;
    } else {
      output += `\nCommand not found: ${command}`;
    }

    setTerminalOutput([...terminalOutput, output]);
    setCommand("");
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.window}>
        <div className={styles.titleBar}>
          <span className={styles.red}></span>
          <span className={styles.yellow}></span>
          <span className={styles.green}></span>
          <h2 className={styles.windowTitle}>Projects</h2>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a href={project.link} className={styles.projectLink}>
                Open <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>

        {/* Terminal Section */}
        <div className={styles.terminal}>
          <div className={styles.terminalOutput}>
            {terminalOutput.map((line, index) => (
              <pre key={index}>{line}</pre>
            ))}
          </div>
          <form onSubmit={handleCommandSubmit} className={styles.terminalInput}>
            <span className={styles.prompt}>$</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              autoFocus
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Projects;
