export default function Skills() {
  const stackGroups = [
    {
      title: 'Front-end',
      note: 'Interfaces responsivas, componentização e consumo de APIs.',
      items: [
        { name: 'Angular', core: true },
        { name: 'React', core: true },
        { name: 'TypeScript', core: true },
        { name: 'JavaScript', core: true },
        { name: 'HTML5 & CSS3 / SCSS', core: true },
        { name: 'Bootstrap', core: false },
        { name: 'Flutter', core: false },
      ],
    },
    {
      title: 'Back-end',
      note: 'Regras de negócio, autenticação, microsserviços e integrações.',
      items: [
        { name: 'C#', core: true },
        { name: '.NET', core: true },
        { name: 'Node.js', core: true },
        { name: 'Express', core: true },
        { name: 'REST APIs', core: true },
        { name: 'Java', core: false },
        { name: 'PHP', core: false },
      ],
    },
    {
      title: 'Bancos de Dados',
      note: 'Modelagem relacional, consultas otimizadas e integridade de dados.',
      items: [
        { name: 'PostgreSQL', core: true },
        { name: 'MySQL', core: true },
        { name: 'SQL Server', core: true },
        { name: 'Modelagem SQL', core: false },
      ],
    },
    {
      title: 'Ecossistema & Ferramentas',
      note: 'Versionamento, CRM corporativo, análise de dados e ambiente.',
      items: [
        { name: 'Git & GitHub', core: true },
        { name: 'Dynamics CRM', core: true },
        { name: 'Power BI', core: false },
        { name: 'Power Apps', core: false },
        { name: 'VS Code & Visual Studio', core: false },
        { name: 'Linux', core: false },
      ],
    },
  ];

  const workHabits = [
    {
      title: 'Rotina em equipe & Ágil',
      desc: 'Vivência prática com Scrum e Kanban, alinhando entregas e prioridades junto ao time.',
    },
    {
      title: 'Comunicação direta',
      desc: 'Facilidade para traduzir necessidades de negócio em tarefas técnicas claras.',
    },
    {
      title: 'Autonomia para investigar',
      desc: 'Costume de ir a fundo em bugs, documentação e regras de dados até achar a causa raiz.',
    },
    {
      title: 'Adaptabilidade',
      desc: 'Facilidade para transitar entre front-end, back-end e integrações conforme o projeto pede.',
    },
  ];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container-width">
        <div className="section-header">
          <span className="section-kicker">03 / stack & ferramentas</span>
          <h2 className="section-title font-display">Com o que eu trabalho</h2>
          <p className="section-desc">
            Tecnologias que uso no dia a dia para construir sistemas web e ferramentas com as quais tenho experiência prática.
          </p>
        </div>

        <div className="tech-grid">
          {stackGroups.map((group) => (
            <div key={group.title} className="skill-card glass-card">
              <div className="skill-card-head">
                <h3>{group.title}</h3>
                <p>{group.note}</p>
              </div>

              <div className="skill-pills">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`skill-pill ${item.core ? 'core' : ''}`}
                  >
                    {item.core && <span className="core-dot" />}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-legend">
          <span className="legend-item">
            <span className="core-dot" /> Uso frequente / principal
          </span>
        </div>

        <div className="work-and-lang-grid">
          <div className="work-card glass-card">
            <h3 className="subcard-title">Jeito de trabalhar</h3>
            <div className="habits-grid">
              {workHabits.map((habit) => (
                <div key={habit.title} className="habit-item">
                  <h4>{habit.title}</h4>
                  <p>{habit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lang-card glass-card">
            <h3 className="subcard-title">Idiomas</h3>
            <div className="lang-list">
              <div className="lang-row">
                <div className="lang-top">
                  <span className="lang-name">Português</span>
                  <span className="font-mono lang-badge">Nativo</span>
                </div>
              </div>

              <div className="lang-row">
                <div className="lang-top">
                  <span className="lang-name">Inglês</span>
                  <span className="font-mono lang-badge secondary">Intermediário</span>
                </div>
                <p className="lang-note">
                  Leitura fluente de documentações técnicas, resolução de problemas e comunicação no ambiente de desenvolvimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
          border-top: 1px solid var(--border-color);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .skill-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 22px;
        }

        .skill-card-head h3 {
          font-size: 19px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .skill-card-head p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-secondary);
          background: var(--surface-subtle);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: 6px;
          transition: var(--transition-smooth);
        }

        .skill-pill.core {
          color: var(--text-primary);
          background: var(--bg-secondary);
          border-color: var(--border-color-hover);
        }

        .skill-pill:hover {
          border-color: var(--color-primary);
          color: var(--text-primary);
        }

        .core-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-primary);
          display: inline-block;
        }

        .skills-legend {
          margin-top: 14px;
          margin-bottom: 32px;
          display: flex;
          justify-content: flex-end;
        }

        .legend-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
        }

        .work-and-lang-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.65fr;
          gap: 20px;
          align-items: stretch;
        }

        .work-card,
        .lang-card {
          padding: 28px;
        }

        .subcard-title {
          font-family: var(--font-mono);
          font-size: 12.5px;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .habits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .habit-item h4 {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .habit-item p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .lang-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .lang-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
        }

        .lang-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .lang-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .lang-name {
          font-size: 15.5px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .lang-badge {
          font-size: 11.5px;
          color: var(--color-primary);
          background: var(--color-primary-transparent);
          padding: 3px 9px;
          border-radius: 99px;
        }

        .lang-badge.secondary {
          color: var(--color-secondary);
          background: var(--color-secondary-transparent);
        }

        .lang-note {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 860px) {
          .tech-grid,
          .work-and-lang-grid,
          .habits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
