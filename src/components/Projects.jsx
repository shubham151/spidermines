function Projects() {
  const projects = [
      {
          name: "Fix for RTL8821CE Driver Issue",
          description: "Revamped Wi-Fi drivers for Ubuntu, gaining recognition on AskUbuntu.",
          link: "#"
      },
      {
          name: "Ongaku",
          description: "An AI-driven music recommender for TikTok videos.",
          link: "#"
      },
      {
          name: "PseudocodeDiffing",
          description: "Developed a Ghidra plugin for reverse engineering binaries.",
          link: "#"
      }
  ];

  return (
      <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="project-list">
              {projects.map((project, index) => (
                  <div key={index} className="project">
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <a href={project.link}>View More</a>
                  </div>
              ))}
          </div>
      </section>
  );
}


export default Projects;