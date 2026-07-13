import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Programador Full Stack',
      company: 'ShiftMC',
      period: '2023 - Atualmente',
      details: [
        'Atuação em desenvolvimento full Stack com foco em front-end (Angular, manipulação de elementos HTML e CSS dinâmicos) e back-end (Node.js, Express).',
        'Responsável pela criação de interfaces intuitivas e pela integração de APIs, incluindo o Dynamics CRM, para manipulação de dados em JSON.',
        'Experiência com autenticação e gestão de tokens (Microsoft Entity), modelagem de dados em Power BI e desenvolvimento em Power Apps.',
        'Habilidade em lidar com fusos horários e formatos de data, manipulação de coleções e lógica condicional, visando soluções escaláveis e de alto desempenho.'
      ],
      current: true
    },
    {
      role: 'Trabalho Independente & Projetos Acadêmicos',
      company: 'Freelance & ETEC/FATEC',
      period: 'Janeiro de 2022 - Dezembro de 2024',
      details: [
        'Desenvolvimento de aplicações web utilizando Angular, C# e Javascript, com integração a sistemas de banco de dados SQL.',
        'Criação de REST APIs robustas e desenvolvimento de interfaces totalmente responsivas.',
        'Participação ativa em eventos científicos e maratonas de programação, recebendo prêmios e medalhas pelo desempenho (Hackathons, Excute, TCC).'
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container-width">
        <h2 className="section-title font-display text-gradient">Minha Trajetória</h2>
        <p className="section-desc">Experiência profissional e projetos em destaque na área de desenvolvimento de software.</p>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.current ? 'current-item' : ''}`}>
              <div className="timeline-dot-wrapper">
                <div className={`timeline-dot ${exp.current ? 'active-dot' : ''}`}>
                  <Briefcase size={16} />
                </div>
              </div>
              
              <div className="timeline-content-card glass-card">
                <div className="card-header">
                  <div className="role-company">
                    <h3>{exp.role}</h3>
                    <span className="company-name">{exp.company}</span>
                  </div>
                  <div className="period-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="details-list">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }

        .section-desc {
          text-align: center;
          color: var(--text-secondary);
          max-width: 600px;
          margin: -24px auto 60px auto;
          font-size: 16px;
        }

        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline-line {
          position: absolute;
          left: 31px;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, var(--color-primary) 0%, rgba(255, 255, 255, 0.05) 100%);
        }

        .timeline-item {
          position: relative;
          padding-left: 80px;
          margin-bottom: 48px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot-wrapper {
          position: absolute;
          left: 0;
          top: 4px;
          display: flex;
          justify-content: center;
          width: 64px;
        }

        .timeline-dot {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          color: var(--text-secondary);
          z-index: 2;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }

        .timeline-dot.active-dot {
          background: var(--bg-secondary);
          border-color: var(--color-secondary);
          color: var(--color-secondary);
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.3);
        }

        .timeline-item:hover .timeline-dot {
          transform: scale(1.1);
        }

        .timeline-content-card {
          padding: 28px;
        }

        .current-item .timeline-content-card {
          border-color: var(--color-primary);
          box-shadow: 0 8px 30px var(--color-primary-transparent);
        }

        .timeline-content-card:hover {
          border-color: var(--color-primary);
          box-shadow: 0 8px 30px var(--color-primary-transparent);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .role-company h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .company-name {
          font-size: 15px;
          color: var(--color-primary-light);
          font-weight: 500;
        }

        .period-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .current-item .period-badge {
          border-color: rgba(0, 229, 255, 0.2);
          color: var(--color-secondary);
        }

        .details-list {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .details-list li {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
          position: relative;
          padding-left: 20px;
        }

        .details-list li::before {
          content: "•";
          color: var(--color-primary);
          position: absolute;
          left: 4px;
          font-size: 18px;
          top: -2px;
        }

        .current-item .details-list li::before {
          color: var(--color-secondary);
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 21px;
          }

          .timeline-dot-wrapper {
            width: 44px;
          }

          .timeline-dot {
            width: 34px;
            height: 34px;
          }

          .timeline-item {
            padding-left: 54px;
          }

          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
