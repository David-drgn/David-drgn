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
    { id: "about", label: "Sobre mim" },
    { id: "experience", label: "Trajetória" },
    { id: "skills", label: "Conhecimentos" },
    { id: "curriculum", label: "Currículo" },
    { id: "contact", label: "Contato" },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky header
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
        <div className="navbar-logo" onClick={() => handleNavClick("home")}>
          <span className="font-display text-gradient logo-text">DR</span>
        </div>

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
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="mobile-actions">
          <button
            className="theme-toggle-btn mobile-theme"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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

      {/* Custom Styles for Navbar */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 24px;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          padding: 16px 24px;
          background: rgba(8, 11, 17, 0);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .navbar-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          cursor: pointer;
        }

        .logo-text {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .navbar-links {
          display: flex;
          gap: 28px;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-smooth);
          padding: 6px 12px;
          border-radius: 8px;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link.active {
          color: var(--color-primary);
          background: var(--color-primary-transparent);
        }

        .theme-toggle-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 50%;
          transition: var(--transition-smooth);
        }

        .theme-toggle-btn:hover {
          color: var(--color-primary);
          background: var(--color-primary-transparent);
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 16px;
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(8, 11, 17, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: var(--transition-smooth);
          transform: translateY(-20px);
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
          gap: 32px;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 22px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--color-secondary);
          transform: scale(1.1);
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
