import React from 'react';
import { FaUsers, FaLightbulb, FaComments } from 'react-icons/fa';

const softSkills = [
  { Icon: FaUsers,     name: 'Teamwork' },
  { Icon: FaLightbulb, name: 'Problem‑solving' },
  { Icon: FaComments,  name: 'Communication' }
];

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="about container">
      <h2 className="section-title">Soft Skills</h2>
      <ul className="soft-skills-list">
        {softSkills.map(({ Icon, name }) => (
          <li key={name} className="soft-skill-item">
            <Icon size="1.5em" className="soft-skill-icon" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
