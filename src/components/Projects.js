import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'A brief description of Project One.',
            link: 'https://github.com/user/project-one'
        },
        {
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            link: 'https://github.com/user/project-two'
        },
        {
            title: 'Project Three',
            description: 'A brief description of Project Three.',
            link: 'https://github.com/user/project-three'
        }
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;