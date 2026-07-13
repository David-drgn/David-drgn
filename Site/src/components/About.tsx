import { GraduationCap, Award, Code, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container-width">
        <h2 className="section-title font-display text-gradient">Sobre Mim</h2>
        
        <div className="about-grid">
          <div className="about-info">
            <h3 className="about-heading">Minha História</h3>
            <p className="about-text">
              Minha jornada na tecnologia começou na ETEC, onde tive meu primeiro contato com programação. O que começou como uma disciplina logo se tornou um <strong>hobby e uma paixão</strong>: criar sites, sistemas e desvendar problemas por meio do código.
            </p>
            <p className="about-text">
              Com o tempo, busquei aprimorar meus conhecimentos teóricos e práticos ingressando no ensino superior. Ao longo dessa trajetória de estudos e projetos, acumulei 2 anos de experiência prática como desenvolvedor full stack, lidando com desafios de ponta a ponta.
            </p>

            <div className="education-timeline">
              <h3 className="about-heading" style={{ marginTop: '32px' }}>Formação Acadêmica</h3>
              
              <div className="education-card glass-card">
                <GraduationCap className="edu-icon" size={24} />
                <div className="edu-details">
                  <span className="edu-period">2023 - 2024</span>
                  <h4>Tecnólogo em Análise e Desenvolvimento de Sistemas</h4>
                  <p className="edu-school">FATEC São Caetano do Sul - Antonio Russo</p>
                </div>
              </div>

              <div className="education-card glass-card">
                <GraduationCap className="edu-icon" size={24} />
                <div className="edu-details">
                  <span className="edu-period">2020 - 2022</span>
                  <h4>Ensino Médio Técnico em Desenvolvimento de Sistemas</h4>
                  <p className="edu-school">ETEC Jorge Street</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-cards">
            <div className="stat-card glass-card">
              <div className="stat-icon-wrapper purple">
                <Code size={24} />
              </div>
              <h3>2+ Anos</h3>
              <p>De experiência prática em desenvolvimento full stack</p>
            </div>

            <div className="stat-card glass-card">
              <div className="stat-icon-wrapper blue">
                <Award size={24} />
              </div>
              <h3>Medalhista</h3>
              <p>Conquistas em eventos científicos e maratonas de programação</p>
            </div>

            <div className="stat-card glass-card">
              <div className="stat-icon-wrapper teal">
                <Heart size={24} />
              </div>
              <h3>Hobby & Foco</h3>
              <p>Apaixonado por criar soluções web modernas e eficientes</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
        }

        .section-title {
          font-size: clamp(32px, 5vw, 44px);
          font-weight: 700;
          margin-bottom: 48px;
          text-align: center;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: start;
        }

        .about-info {
          display: flex;
          flex-direction: column;
        }

        .about-heading {
          font-size: 22px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .about-text {
          font-size: 16.5px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .about-text strong {
          color: var(--color-secondary);
          font-weight: 600;
        }

        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .education-card {
          display: flex;
          gap: 20px;
          padding: 20px;
          align-items: flex-start;
        }

        .education-card:hover {
          transform: translateX(4px) !important;
        }

        .edu-icon {
          color: var(--color-primary-light);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .edu-details {
          display: flex;
          flex-direction: column;
        }

        .edu-period {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-secondary);
          margin-bottom: 4px;
        }

        .edu-details h4 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .edu-school {
          font-size: 14.5px;
          color: var(--text-secondary);
        }

        .about-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stat-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          text-align: center;
        }

        .stat-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 12px;
        }

        .stat-icon-wrapper.purple {
          background: rgba(138, 122, 178, 0.1);
          color: var(--color-primary-light);
        }

        .stat-icon-wrapper.blue {
          background: rgba(0, 229, 255, 0.1);
          color: var(--color-secondary);
        }

        .stat-icon-wrapper.teal {
          background: rgba(138, 122, 178, 0.1);
          color: var(--color-primary-light);
        }

        .stat-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 950px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
