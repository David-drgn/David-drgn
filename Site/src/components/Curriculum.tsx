import { Download, ExternalLink, FileText } from 'lucide-react';

export default function Curriculum() {
  return (
    <section id="curriculum" className="curriculum-section section-padding">
      <div className="container-width">
        <div className="section-header">
          <span className="section-kicker">04 / currículo</span>
          <h2 className="section-title font-display">Versão em documento</h2>
          <p className="section-desc">
            Se preferir guardar ou imprimir, você pode consultar a versão completa em PDF abaixo.
          </p>
        </div>

        <div className="curriculum-container">
          <div className="curriculum-actions-bar glass-card">
            <div className="bar-info">
              <div className="file-icon">
                <FileText size={20} />
              </div>
              <div>
                <h3>David_Raphael_CV.pdf</h3>
                <span className="font-mono">PDF • Currículo completo</span>
              </div>
            </div>
            <div className="bar-buttons">
              <a
                href="/CV.pdf"
                download="David_Raphael_CV.pdf"
                className="btn-download"
              >
                <Download size={16} /> Baixar PDF
              </a>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-view"
              >
                <ExternalLink size={16} /> Abrir em nova guia
              </a>
            </div>
          </div>

          <div className="curriculum-preview glass-card">
            <iframe
              src="/CV.pdf#toolbar=0"
              title="Currículo de David Raphael"
              width="100%"
              height="580px"
            />
            <div className="mobile-fallback">
              <div className="fallback-card">
                <FileText size={32} className="fallback-icon" />
                <h4>Visualização melhor em tela cheia</h4>
                <p>
                  Em celulares, abra o PDF em uma nova guia ou faça o download nos botões acima para ler com conforto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .curriculum-section {
          position: relative;
          border-top: 1px solid var(--border-color);
        }

        .curriculum-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .curriculum-actions-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .bar-info {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .file-icon {
          width: 42px;
          height: 42px;
          border-radius: 8px;
          background: var(--color-primary-transparent);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bar-info h3 {
          font-size: 15.5px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .bar-info span {
          font-size: 12px;
          color: var(--text-muted);
        }

        .bar-buttons {
          display: flex;
          gap: 10px;
        }

        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--color-primary);
          border: 1px solid var(--color-primary);
          color: var(--text-on-accent);
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .btn-download:hover {
          background: var(--color-primary-light);
          border-color: var(--color-primary-light);
        }

        .btn-view {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--surface-subtle);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .btn-view:hover {
          background: var(--surface-subtle-hover);
          border-color: var(--border-color-hover);
        }

        .curriculum-preview {
          position: relative;
          overflow: hidden;
          padding: 10px;
          background: var(--bg-secondary);
        }

        .curriculum-preview iframe {
          border: none;
          border-radius: 8px;
          background: #eae5db;
          filter: sepia(0.08) brightness(0.93) contrast(0.97);
          display: block;
        }

        .mobile-fallback {
          display: none;
        }

        @media (max-width: 768px) {
          .curriculum-actions-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .bar-buttons {
            width: 100%;
            flex-direction: column;
          }

          .btn-download,
          .btn-view {
            justify-content: center;
            width: 100%;
          }

          .curriculum-preview iframe {
            display: none;
          }

          .mobile-fallback {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 36px 20px;
            text-align: center;
          }

          .fallback-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 360px;
          }

          .fallback-icon {
            color: var(--color-primary);
            margin-bottom: 12px;
          }

          .fallback-card h4 {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 6px;
          }

          .fallback-card p {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.55;
          }
        }
      `}</style>
    </section>
  );
}
