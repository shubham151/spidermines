function Skills() {
    const skills = [
        "JavaScript", "ReactJS", "NodeJS", "Python", "SQL", "MongoDB", "AWS", "Docker", "Kubernetes"
    ];

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}


export default Skills;