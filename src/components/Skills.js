import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaJava } from 'react-icons/fa';
import { IoLogoReact } from 'react-icons/io5';
import {
  SiNetlify,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiPython
} from 'react-icons/si';

const learned = [
  { Icon: FaHtml5,     name: 'HTML5',      color: '#E34F26' },
  { Icon: FaCss3Alt,   name: 'CSS3',       color: '#1572B6' },
  { Icon: FaJs,        name: 'JavaScript', color: '#F7DF1E' },
  { Icon: FaReact,     name: 'React',      color: '#61DAFB' },
  { Icon: SiNetlify,   name: 'Netlify',    color: '#00C7B7' },
  { Icon: FaNodeJs,    name: 'Node.js',    color: '#339933' }
];

const learning = [
  { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38B2AC' },
  { Icon: SiTypescript,  name: 'TypeScript',   color: '#3178C6' },
  { Icon: SiVercel,      name: 'Vercel',       color: '#000000' }
];

const upcoming = [
  { Icon: SiPython,    name: 'Python',       color: '#3776AB' },
  { Icon: IoLogoReact,  name: 'React Native', color: '#61DAFB' },
  { Icon: FaDatabase,   name: 'Databases',    color: '#F29111' },
  { Icon: FaJava,       name: 'Java',         color: '#007396' }
];

export default function Skills() {
  return (
    <section id="skills" className="about container">
      <h2>Skills</h2>

      {/* Learned */}
      <div className="skills-group">
        <h3>Learned</h3>
        <div className="skills-icons">
          {learned.map(({ Icon, name, color }) => (
            <div key={name} className="skill-item">
              <Icon size="2.5em" color={color} title={name} />
              <div style={{ color }}>{name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning */}
      <div className="skills-group">
        <h3>Learning</h3>
        <div className="skills-icons">
          {learning.map(({ Icon, name, color }) => (
            <div key={name} className="skill-item">
              <Icon size="2.5em" color={color} title={name} />
              <div style={{ color }}>{name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming */}
      <div className="skills-group">
        <h3>Upcoming</h3>
        <div className="skills-icons">
          {upcoming.map(({ Icon, name, color }) => (
            <div key={name} className="skill-item">
              <Icon size="2.5em" color={color} title={name} />
              <div style={{ color }}>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
