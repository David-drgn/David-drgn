import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({
  activeSection,
  theme,
  toggleTheme,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "experience", label: "Experiência" },
    { id: "skills", label: "Stack" },
    { id: "curriculum", label: "Currículo" },
    { id: "contact", label: "Contato" },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <button
          type="button"
          className="navbar-logo"
          onClick={() => handleNavClick("home")}
        >
          <span className="logo-name">david.raphael</span>
          <span className="logo-cursor">_</span>
        </button>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
          <div className="nav-divider" />
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            title={theme === "dark" ? "Mudar para tema claro suave" : "Mudar para tema escuro suave"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="mobile-actions">
          <button
            className="theme-toggle-btn mobile-theme"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <div className="mobile-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 22px 24px;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          padding: 14px 24px;
          background: var(--bg-navbar);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
        }

        .navbar-container {
          max-width: 1040px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          background: none;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: baseline;
          padding: 0;
        }

        .logo-name {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.03em;
        }

        .logo-cursor {
          color: var(--color-primary);
          font-family: var(--font-mono);
          font-size: 20px;
          font-weight: 600;
          line-height: 1;
          margin-left: 2px;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-divider {
          width: 1px;
          height: 18px;
          background: var(--border-color);
          margin: 0 8px;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-smooth);
          padding: 7px 12px;
          border-radius: 6px;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: var(--surface-subtle);
        }

        .nav-link.active {
          color: var(--color-primary);
          background: var(--color-primary-transparent);
        }

        .theme-toggle-btn {
          background: var(--surface-subtle);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          transition: var(--transition-smooth);
        }

        .theme-toggle-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-color-hover);
          background: var(--surface-subtle-hover);
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 12px;
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-primary);
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: var(--transition-smooth);
          transform: translateY(-12px);
        }

        .mobile-drawer.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.02em;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--color-primary);
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .mobile-actions {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
