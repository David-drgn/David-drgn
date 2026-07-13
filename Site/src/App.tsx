import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'skills', 'curriculum', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for navbar height

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
    // Call once to set initial active section
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
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Background Graphic Blobs */}
      <div className="gradient-bg">
        <div className="gradient-sphere-1"></div>
        <div className="gradient-sphere-2"></div>
      </div>

      <Navbar activeSection={activeSection} />

      <main className="main-content">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Experience />
        <Skills />
        <Curriculum />
        <Contact />
      </main>

      <footer className="footer glass-card">
        <div className="container-width footer-container">
          <p className="copyright">
            © {new Date().getFullYear()} David Raphael Gustavo Neves. Todos os direitos reservados.
          </p>
          <p className="credit">
            Desenvolvido em React + Vite • Hospedado no Vercel
          </p>
        </div>
      </footer>

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
          margin-top: 60px;
          border-radius: 0 !important;
          border-left: none !important;
          border-right: none !important;
          border-bottom: none !important;
          background: rgba(8, 11, 17, 0.8) !important;
          padding: 24px 0;
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
          font-size: 13px;
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
