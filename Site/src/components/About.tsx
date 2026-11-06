import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container-width">
        <div className="section-header">
          <span className="section-kicker">01 / sobre mim</span>
          <h2 className="section-title font-display">Um pouco da minha caminhada</h2>
        </div>

        <div className="about-grid">
          <div className="about-prose">
            <p>
              Meu primeiro contato real com programação foi em 2020, quando entrei
              no ensino médio técnico em Desenvolvimento de Sistemas na{' '}
              <strong>ETEC Jorge Street</strong>. Foi ali que descobri o gosto por
              construir projetos do zero — entender como uma tela conversa com o
              back-end, estruturar bancos de dados e ver uma ideia funcionando de
              verdade.
            </p>
            <p>
              Para aprofundar essa base, segui para a graduação em Análise e
              Desenvolvimento de Sistemas na{' '}
              <strong>FATEC São Caetano do Sul</strong>. Durante a faculdade e o
              técnico, participei ativamente de maratonas de programação,
              hackathons e mostras científicas, onde conquistei medalhas e
              apresentei projetos práticos.
            </p>
            <p>
              Nos últimos 2 anos venho atuando profissionalmente como desenvolvedor
              Full Stack. Gosto de escrever código legível, construir interfaces
              diretas sem complicação desnecessária e resolver problemas reais
              junto com a equipe.
            </p>
          </div>

          <div className="about-education">
            <h3 className="column-subtitle">Formação & Destaques</h3>

            <div className="edu-list">
              <div className="edu-item glass-card">
                <div className="edu-meta">
                  <span className="font-mono edu-period">2023 — 2024</span>
                  <GraduationCap size={17} className="edu-icon" />
                </div>
                <h4>Tecnólogo em Análise e Desenvolvimento de Sistemas</h4>
                <p className="edu-school">FATEC São Caetano do Sul – Antonio Russo</p>
              </div>

              <div className="edu-item glass-card">
                <div className="edu-meta">
                  <span className="font-mono edu-period">2020 — 2022</span>
                  <GraduationCap size={17} className="edu-icon" />
                </div>
                <h4>Técnico em Desenvolvimento de Sistemas</h4>
                <p className="edu-school">ETEC Jorge Street (Ensino Médio Integrado)</p>
              </div>

              <div className="edu-item glass-card">
                <div className="edu-meta">
                  <span className="font-mono edu-period">Conquistas</span>
                  <Award size={17} className="edu-icon award" />
                </div>
                <h4>Maratonas de Programação & Eventos Científicos</h4>
                <p className="edu-school">
                  Premiações e medalhas em hackathons, maratonas acadêmicas, mostra Excute e TCC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          border-top: 1px solid var(--border-color);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: start;
        }

        .about-prose {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .about-prose p {
          font-size: 16.5px;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        .about-prose strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .column-subtitle {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .edu-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .edu-item {
          padding: 20px 22px;
        }

        .edu-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .edu-period {
          font-size: 12px;
          color: var(--color-primary);
        }

        .edu-icon {
          color: var(--text-muted);
        }

        .edu-icon.award {
          color: var(--color-secondary);
        }

        .edu-item h4 {
          font-size: 15.5px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
          line-height: 1.4;
        }

        .edu-school {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
