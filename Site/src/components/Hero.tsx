import { FileText, MessageSquare } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="hero-section">
      <div className="container-width hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Disponível para novas oportunidades
          </div>
          
          <h1 className="hero-title font-display">
            Olá, meu nome é <br />
            <span className="text-gradient">David Raphael</span>
          </h1>
          
          <p className="hero-subtitle">
            Programador Full Stack
          </p>
          
          <p className="hero-description">
            Desenvolvedor com 2 anos de experiência em projetos web, abrangendo do front-end ao back-end. Adoro criar soluções escaláveis, otimizadas e com foco na experiência do usuário e na eficiência técnica.
          </p>

          <div className="hero-actions">
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Fale Comigo <MessageSquare size={18} />
            </button>
            <button onClick={() => onNavigate('curriculum')} className="btn-secondary">
              Ver Currículo <FileText size={18} />
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/David-drgn" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/david-raphael-gustavo-neves-1674361bb/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/david_drgn_/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/5511994844038" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              {/* WhatsApp custom SVG path */}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.748.002-2.602-1.01-5.05-2.85-6.892C16.637 2.122 14.191 1.1 11.603 1.1 6.162 1.1 1.74 5.47 1.737 10.848c-.001 1.702.464 3.366 1.348 4.811L2.09 20.06l4.557-1.192-.001.002zM17.8 14.65c-.3-.15-1.777-.88-2.046-.98-.27-.1-.466-.15-.66.15-.194.3-.75.98-.92 1.18-.17.2-.34.225-.64.075-.3-.15-1.266-.47-2.41-1.496-.89-.797-1.492-1.782-1.666-2.082-.174-.3-.018-.462.13-.61.137-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.66-1.6-.9-2.175-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.105 3.23 5.1 4.522.712.308 1.27.492 1.7.63.714.227 1.365.195 1.88.118.573-.085 1.777-.73 2.026-1.43.25-.7.25-1.3.175-1.43-.075-.13-.275-.205-.575-.355z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="hero-graphic">
          <div className="code-window glass-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="window-title">David.tsx</span>
            </div>
            <div className="code-body">
              <pre>
                <code>
                  <span className="code-keyword">const</span> developer = &#123;<br />
                  &nbsp;&nbsp;name: <span className="code-string">'David Raphael'</span>,<br />
                  &nbsp;&nbsp;role: <span className="code-string">'Full Stack Developer'</span>,<br />
                  &nbsp;&nbsp;experience: <span className="code-number">2</span>, <span className="code-comment">// years</span><br />
                  &nbsp;&nbsp;skills: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'React'</span>, <span className="code-string">'Angular'</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Node.js'</span>, <span className="code-string">'.NET/C#'</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;passionate: <span className="code-boolean">true</span>,<br />
                  &nbsp;&nbsp;coffeeLover: <span className="code-boolean">true</span><br />
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 100px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          width: 100%;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(138, 122, 178, 0.1);
          border: 1px solid rgba(138, 122, 178, 0.25);
          color: var(--color-primary-light);
          padding: 6px 14px;
          border-radius: 99px;
          font-size: 13px;
          font-weight: 500;
          width: fit-content;
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-secondary);
          box-shadow: 0 0 10px var(--color-secondary);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 229, 255, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(0, 229, 255, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 229, 255, 0); }
        }

        .hero-title {
          font-size: clamp(40px, 6vw, 64px);
          line-height: 1.1;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .hero-subtitle {
          font-size: clamp(20px, 3vw, 26px);
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .hero-description {
          font-size: 17px;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 36px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--color-primary) 0%, #685a85 100%);
          border: none;
          color: white;
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 12px rgba(138, 122, 178, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(138, 122, 178, 0.4);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--border-color-hover);
          transform: translateY(-2px);
        }

        .hero-socials {
          display: flex;
          gap: 16px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .social-icon:hover {
          color: var(--color-secondary);
          background: rgba(0, 229, 255, 0.05);
          border-color: var(--color-secondary);
          transform: translateY(-3px);
        }

        /* Graphic/Code Window Styling */
        .hero-graphic {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .code-window {
          width: 100%;
          max-width: 400px;
          overflow: hidden;
          font-family: 'Courier New', Courier, monospace;
          box-shadow: var(--shadow-lg);
        }

        .code-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid var(--border-color);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 6px;
        }

        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .window-title {
          font-size: 12px;
          color: var(--text-secondary);
          margin-left: 12px;
          font-weight: 500;
        }

        .code-body {
          padding: 20px;
          font-size: 14px;
          line-height: 1.7;
          overflow-x: auto;
          color: #a9b2c3;
        }

        .code-body pre, .code-body code {
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }

        .code-keyword { color: #c792ea; }
        .code-string { color: #c3e88d; }
        .code-number { color: #f78c6c; }
        .code-boolean { color: #ffcb6b; }
        .code-comment { color: var(--text-muted); font-style: italic; }

        @media (max-width: 950px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 48px;
          }

          .hero-badge, .hero-actions, .hero-socials {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-graphic {
            order: -1; /* Place the graphic on top on mobile */
          }

          .code-window {
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
}
