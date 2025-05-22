import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">Contact</h2>
      <p>
        <a href="mailto: fernandopfogaca@gmail.com">
          <FaEnvelope style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
          Email
        </a>
        |
        <a
          href="https://github.com/FernandoFogaca"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 0.5rem' }}
        >
          <FaGithub style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
          GitHub
        </a>
        |
        <a
          href="https://www.linkedin.com/in/fernando-fogaca-17a267111/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 0.5rem' }}
        >
          <FaLinkedin style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
          LinkedIn
        </a>
      </p>
    </section>
  );
}
