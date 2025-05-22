import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.screenshot && (
        <img
          src={project.screenshot}
          alt={`Screenshot of ${project.title}`}
        />
      )}
      <div className="content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="techs">
          {project.techs.map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="links">
          {project.demo && (
            <a
              href={project.demo}
              className="demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className="repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}