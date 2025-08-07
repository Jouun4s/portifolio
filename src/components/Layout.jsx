import React from 'react';
import '../index.css';
import Logo from '../assets/Logo_site.png'; // Substitua com o nome real

export default function Layout({ children }) {
  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header className="header">
        <div className="container">
          <nav className="navbar-container">
            {/* Left links */}
            <ul className="nav-section">
              <li className="nav-item active"><a href="#">Inicio</a></li>
              <li className="nav-item"><a href="#about">Sobre</a></li>
              <li className="nav-item"><a href="#service">Portifólio</a></li>
            </ul>

            {/* Logo centered */}
            <div className="logo">
              <img src={Logo} alt="LOGO" />
            </div>

            {/* Right links */}
            <ul className="nav-section">
              <li className="nav-item"><a href="#resume">Avaliações</a></li>
              <li className="nav-item"><a href="#project">Projetos</a></li>
              <li className="nav-item"><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ flexGrow: 1 }}>
        {children}
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} MeuSite</div>
      </footer>
    </div>
  );
}
