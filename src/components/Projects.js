import React from 'react';
import projects from '../Data/Projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="Projects" style={{
      maxWidth: '960px',
      margin: '2rem auto',
      padding: '1rem'
    }}>
      <h2>My Projects</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1rem'
      }}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}