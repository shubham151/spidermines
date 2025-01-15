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
        <section id="experience" className="experience">
            <h2>Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3>{exp.title}</h3>
                        <p><strong>{exp.company}</strong> | {exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
