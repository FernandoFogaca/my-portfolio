
import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          Fernando  Padilha Fogaça
        </div>
        <nav>
          <a href="https://github.com/FernandoFogaca" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/fernando-fogaca-17a267111/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
    </header>
  );
}
