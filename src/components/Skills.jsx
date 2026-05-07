function Skills() {
    const skills = [
        "Frontend Development",
        "C",
        "C++",
        "C#",
        "Java",
        "Python"
    ];
    
    return (
        <section id = "skills" className = "section">
            <div className = "section-header">
                <p className="section-label">Skills</p>
                <h2>What I can do</h2>
            </div>

            <div className = "skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills