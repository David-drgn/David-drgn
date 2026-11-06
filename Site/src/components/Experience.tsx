export default function Experience() {
  const experiences = [
    {
      role: 'Programador Full Stack',
      company: 'ShiftMC',
      period: '2023 — Presente',
      current: true,
      stack: ['Angular', 'Node.js', 'Express', 'C#', 'Dynamics CRM', 'Power BI', 'Power Apps'],
      details: [
        'Desenvolvimento e evolução de aplicações web full stack, trabalhando com Angular no front-end e Node.js (Express) no back-end.',
        'Criação de interfaces dinâmicas e integração com APIs REST e Microsoft Dynamics CRM para sincronização e manipulação de dados.',
        'Implementação de fluxos de autenticação e gestão de tokens (Microsoft Entity), além de relatórios no Power BI e automações em Power Apps.',
        'Resolução de regras de negócio complexas em produção, incluindo tratamento preciso de fusos horários, manipulação de grandes coleções de dados e otimização de performance.'
      ]
    },
    {
      role: 'Desenvolvedor Web Independente & Projetos Acadêmicos',
      company: 'Freelance • FATEC & ETEC',
      period: '2022 — 2024',
      current: false,
      stack: ['Angular', 'C# / .NET', 'JavaScript', 'SQL', 'REST APIs'],
      details: [
        'Desenvolvimento de sistemas web completos sob demanda utilizando Angular, C# e JavaScript integrados a bancos de dados SQL.',
        'Arquitetura e implementação de APIs REST e interfaces responsivas, acompanhando desde o levantamento de requisitos até a entrega.',
        'Participação premiada em maratonas de programação, hackathons e eventos científicos (Excute e TCC).'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container-width">
        <div className="section-header">
          <span className="section-kicker">02 / experiência</span>
          <h2 className="section-title font-display">Onde tenho trabalhado</h2>
          <p className="section-desc">
            Minha trajetória prática construindo e mantendo sistemas web em produção e projetos independentes.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <article key={index} className="experience-item glass-card">
              <div className="exp-meta">
                <div className="exp-period-row">
                  <span className="font-mono exp-period">{exp.period}</span>
                  {exp.current && <span className="current-pill">Atual</span>}
                </div>
                <h4 className="exp-company">{exp.company}</h4>

                <div className="exp-stack">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="font-mono exp-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="exp-content">
                <h3 className="exp-role">{exp.role}</h3>
                <ul className="exp-details">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
          border-top: 1px solid var(--border-color);
        }

        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .experience-item {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          padding: 32px;
        }

        .exp-meta {
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--border-color);
          padding-right: 28px;
        }

        .exp-period-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .exp-period {
          font-size: 13px;
          color: var(--text-muted);
        }

        .current-pill {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--color-secondary);
          background: var(--color-secondary-transparent);
          padding: 2px 8px;
          border-radius: 99px;
          font-weight: 500;
        }

        .exp-company {
          font-size: 18px;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 20px;
        }

        .exp-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .exp-tech-tag {
          font-size: 11.5px;
          color: var(--text-secondary);
          background: var(--surface-subtle);
          border: 1px solid var(--border-color);
          padding: 3px 8px;
          border-radius: 5px;
        }

        .exp-content {
          display: flex;
          flex-direction: column;
        }

        .exp-role {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .exp-details {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exp-details li {
          font-size: 15.5px;
          color: var(--text-secondary);
          line-height: 1.65;
          position: relative;
          padding-left: 18px;
        }

        .exp-details li::before {
          content: "–";
          color: var(--color-primary);
          position: absolute;
          left: 0;
          top: 0;
          font-weight: 600;
        }

        @media (max-width: 820px) {
          .experience-item {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 24px;
          }

          .exp-meta {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
            padding-right: 0;
            padding-bottom: 20px;
          }

          .exp-company {
            margin-bottom: 12px;
          }
        }
      `}</style>
    </section>
  );
}
