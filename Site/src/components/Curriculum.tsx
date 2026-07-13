import { Download, Eye } from 'lucide-react';

export default function Curriculum() {
  return (
    <section id="curriculum" className="curriculum-section section-padding">
      <div className="container-width">
        <h2 className="section-title font-display text-gradient">Currículo</h2>
        <p className="section-desc">Visualize ou faça o download da versão em PDF completa do meu currículo.</p>

        <div className="curriculum-container">
          {/* Action Header */}
          <div className="curriculum-actions-bar glass-card">
            <div className="bar-info">
              <h3>David_Raphael_CV.pdf</h3>
              <span>Tamanho: ~550 KB • Atualizado recentemente</span>
            </div>
            <div className="bar-buttons">
              <a href="/CV.pdf" download="David_Raphael_CV.pdf" className="btn-download">
                <Download size={18} /> Baixar PDF
              </a>
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-view">
                <Eye size={18} /> Abrir em Nova Guia
              </a>
            </div>
          </div>

          {/* PDF Preview Frame (Desktop only for better UX) */}
          <div className="curriculum-preview glass-card">
            <iframe 
              src="/CV.pdf#toolbar=0" 
              title="Currículo de David Raphael"
              width="100%" 
              height="600px" 
              frameBorder="0"
            />
            {/* Fallback visual for devices/browsers that don't render pdfs */}
            <div className="mobile-fallback">
              <div className="fallback-card">
                <div className="doc-icon">📄</div>
                <h4>Visualização indisponível em telas pequenas</h4>
                <p>Para ler o currículo completo com formatação, utilize os botões acima para baixar o arquivo ou visualizá-lo em uma nova guia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .curriculum-section {
          position: relative;
        }

        .curriculum-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .curriculum-actions-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .bar-info h3 {
          font-size: 17px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .bar-info span {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .bar-buttons {
          display: flex;
          gap: 12px;
        }

        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--color-primary) 0%, #685a85 100%);
          border: none;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .btn-download:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(138, 122, 178, 0.2);
        }

        .btn-view {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .btn-view:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--border-color-hover);
        }

        .curriculum-preview {
          position: relative;
          overflow: hidden;
          padding: 8px;
        }

        .curriculum-preview iframe {
          border-radius: 12px;
          background: #ffffff;
        }

        .mobile-fallback {
          display: none;
        }

        @media (max-width: 768px) {
          .curriculum-actions-bar {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .bar-buttons {
            width: 100%;
            flex-direction: column;
          }

          .btn-download, .btn-view {
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
            padding: 40px 20px;
            text-align: center;
          }

          .fallback-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 400px;
          }

          .doc-icon {
            font-size: 48px;
            margin-bottom: 16px;
          }

          .fallback-card h4 {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .fallback-card p {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
          }
        }
      `}</style>
    </section>
  );
}
