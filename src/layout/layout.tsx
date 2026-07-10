import React, { useState, useEffect } from 'react';
import './layout.scss';

export interface LayoutProps {
  children: React.ReactNode;
  activeView: string;
  onViewChange: (view: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeView, onViewChange }) => {
  const [systemTime, setSystemTime] = useState<string>('00:00:00');

  // Simulación de reloj de sistema en tiempo real para la barra superior/inferior
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toTimeString().split(' ')[0] || "------");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME.EXE' },
    { id: 'about-me', label: 'ABOUT_ME.INF' },
    { id: 'projects', label: 'PROJECTS.BAT' },
    { id: 'contact', label: 'CONTACT.SYS' }
  ];

  return (
    <div className="layout-container">
      {/* HEADER: Barra de Título y Menú del Sistema Operativo */}
      <header className="layout-header">
        <div className="layout-header__branding">
          <span className="layout-header__icon">💾</span>
          <span className="layout-header__title">RETRO_OS_v2.0.26</span>
        </div>
        
        <nav className="layout-header__nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`layout-header__nav-btn ${activeView === item.id ? 'is-active' : ''}`}
              onClick={() => onViewChange(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="layout-header__controls">
          <span className="layout-header__time">[{systemTime}]</span>
          <div className="layout-header__window-actions">
            <span className="layout-header__action-btn">_</span>
            <span className="layout-header__action-btn">▢</span>
            <span className="layout-header__action-btn layout-header__action-btn--close">X</span>
          </div>
        </div>
      </header>

      {/* VIEWPORT: Contenedor principal donde se renderizan las vistas */}
      <main className="layout-viewport">
        <div className="layout-viewport__inner">
          {children}
        </div>
      </main>

      {/* FOOTER: Barra de Estado de Red e Infraestructura */}
      <footer className="layout-footer">
        <div className="layout-footer__status">
          <span className="layout-footer__led"></span>
          <span className="layout-footer__status-text">STATUS: SYS_ONLINE</span>
        </div>
        <div className="layout-footer__info">
          <span className="layout-footer__node">NODE: BUENOS_AIRES_AR</span>
          <span className="layout-footer__protocol">PROTO: HTTPS // TLS_1.3</span>
        </div>
      </footer>
    </div>
  );
};