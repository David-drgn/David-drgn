import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Contact from './components/Contact';
import Chat from './components/Chat';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'skills', 'curriculum', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="app-wrapper">
      <div className="gradient-bg">
        <div className="gradient-sphere-1"></div>
        <div className="gradient-sphere-2"></div>
      </div>

      <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Experience />
        <Skills />
        <Curriculum />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container-width footer-container">
          <p className="copyright">
            © {new Date().getFullYear()} David Raphael Gustavo Neves
          </p>
          <p className="credit font-mono">
            Santo André, SP • Feito com React & TypeScript
          </p>
        </div>
      </footer>

      <Chat />

      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .main-content {
          flex: 1;
        }

        .footer {
          margin-top: 40px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-secondary);
          padding: 28px 0;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .copyright {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .credit {
          font-size: 12.5px;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
