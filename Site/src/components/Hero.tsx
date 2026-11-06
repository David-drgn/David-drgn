import { FileText, ArrowUpRight, Mail } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="hero-section">
      <div className="container-width hero-container">
        <div className="hero-content">
          <div className="hero-meta">
            <span className="status-indicator" />
            <span>Santo André, SP • Desenvolvedor Full Stack</span>
          </div>

          <h1 className="hero-title font-display">
            Oi, eu sou o <span className="hero-highlight">David Raphael</span>
          </h1>

          <p className="hero-lead">
            Construo aplicações web de ponta a ponta — de interfaces limpas e
            rápidas até as APIs e bancos de dados que sustentam o sistema.
          </p>

          <p className="hero-description">
            Trabalho há mais de 2 anos com desenvolvimento web. Hoje atuo na{' '}
            <strong>ShiftMC</strong> criando soluções com Angular, Node.js, C#
            (.NET), bancos SQL e integrações corporativas.
          </p>

          <div className="hero-actions">
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              <Mail size={17} /> Entrar em contato
            </button>
            <button onClick={() => onNavigate('curriculum')} className="btn-secondary">
              <FileText size={17} /> Currículo
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/David-drgn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/david-raphael-gustavo-neves-1674361bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a
              href="https://wa.me/5511994844038"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              WhatsApp <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.instagram.com/david_drgn_/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="profile-card glass-card">
            <div className="profile-card-header">
              <span className="font-mono profile-tag">resumo</span>
              <span className="profile-status">Em atividade</span>
            </div>

            <div className="profile-rows">
              <div className="profile-row">
                <span className="row-label">Atualmente</span>
                <p className="row-value">
                  Full Stack na <strong>ShiftMC</strong> <span className="row-muted">(2023 – hoje)</span>
                </p>
              </div>

              <div className="profile-row">
                <span className="row-label">Graduação</span>
                <p className="row-value">
                  ADS — <strong>FATEC São Caetano do Sul</strong>
                </p>
              </div>

              <div className="profile-row">
                <span className="row-label">Base Técnica</span>
                <p className="row-value">
                  Desenv. de Sistemas — <strong>ETEC Jorge Street</strong>
                </p>
              </div>

              <div className="profile-row">
                <span className="row-label">Dia a dia</span>
                <div className="mini-tags">
                  <span>Angular</span>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>C# / .NET</span>
                  <span>SQL</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        .hero-section {
          min-height: 92vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 120px 24px 64px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 56px;
          align-items: center;
          width: 100%;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
        }

        .hero-meta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-secondary);
        }

        .hero-title {
          font-size: clamp(38px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.1;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .hero-highlight {
          color: var(--color-primary);
        }

        .hero-lead {
          font-size: clamp(18px, 2.1vw, 21px);
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.5;
          margin-bottom: 16px;
          max-width: 560px;
        }

        .hero-description {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 540px;
          margin-bottom: 32px;
        }

        .hero-description strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 36px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--color-primary);
          border: 1px solid var(--color-primary);
          color: var(--text-on-accent);
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-primary:hover {
          background: var(--color-primary-light);
          border-color: var(--color-primary-light);
          transform: translateY(-1px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--surface-subtle);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-secondary:hover {
          background: var(--surface-subtle-hover);
          border-color: var(--border-color-hover);
          transform: translateY(-1px);
        }

        .hero-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          padding-top: 8px;
          border-top: 1px solid var(--border-color);
          width: fit-content;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .social-link:hover {
          color: var(--color-primary);
        }

        /* Profile Summary Card */
        .hero-aside {
          display: flex;
          justify-content: flex-end;
        }

        .profile-card {
          width: 100%;
          max-width: 390px;
          padding: 26px;
        }

        .profile-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          margin-bottom: 18px;
          border-bottom: 1px solid var(--border-color);
        }

        .profile-tag {
          font-size: 12px;
          color: var(--text-muted);
          text-transform: lowercase;
        }

        .profile-status {
          font-size: 12px;
          font-weight: 500;
          color: var(--color-secondary);
          background: var(--color-secondary-transparent);
          padding: 3px 10px;
          border-radius: 99px;
        }

        .profile-rows {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .profile-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .row-label {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--text-muted);
        }

        .row-value {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .row-value strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .row-muted {
          color: var(--text-muted);
          font-size: 13px;
        }

        .mini-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }

        .mini-tags span {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-primary);
          background: var(--surface-subtle);
          border: 1px solid var(--border-color);
          padding: 3px 9px;
          border-radius: 6px;
        }

        @media (max-width: 900px) {
          .hero-section {
            padding-top: 110px;
            min-height: auto;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-aside {
            justify-content: flex-start;
          }

          .profile-card {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
