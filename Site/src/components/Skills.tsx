import { useState } from 'react';
import { Shield, Sparkles, Languages, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'tech' | 'soft'>('tech');

  const techSkills = {
    frontend: [
      { name: 'React', level: 'Intermediário' },
      { name: 'Angular', level: 'Avançado' },
      { name: 'TypeScript', level: 'Avançado' },
      { name: 'JavaScript', level: 'Avançado' },
      { name: 'HTML5', level: 'Avançado' },
      { name: 'CSS3 / SCSS', level: 'Avançado' },
      { name: 'Bootstrap', level: 'Avançado' },
      { name: 'Flutter', level: 'Intermediário' },
    ],
    backend: [
      { name: 'C#', level: 'Avançado' },
      { name: '.NET', level: 'Avançado' },
      { name: 'Node.js', level: 'Avançado' },
      { name: 'Express', level: 'Avançado' },
      { name: 'Java', level: 'Intermediário' },
      { name: 'PHP', level: 'Intermediário' },
      { name: 'REST APIs', level: 'Avançado' },
    ],
    databases: [
      { name: 'PostgreSQL', level: 'Avançado' },
      { name: 'MySQL', level: 'Avançado' },
      { name: 'SQL Server', level: 'Intermediário' },
      { name: 'SGBD', level: 'Avançado' },
    ],
    tools: [
      { name: 'Git / GitHub', level: 'Avançado' },
      { name: 'Dynamics CRM', level: 'Intermediário' },
      { name: 'Power BI', level: 'Intermediário' },
      { name: 'Power Apps', level: 'Intermediário' },
      { name: 'VS Code', level: 'Avançado' },
      { name: 'Visual Studio', level: 'Avançado' },
      { name: 'Linux', level: 'Intermediário' },
    ]
  };

  const softSkills = [
    'Trabalho em equipe e colaboração focada em metas',
    'Excelente comunicação e facilidade na troca de ideias',
    'Adaptabilidade ágil para lidar com novos ambientes de trabalho',
    'Raciocínio analítico afiado para resolver problemas complexos',
    'Proatividade constante na busca por melhorias e novas soluções',
    'Organização eficiente do tempo e priorização de tarefas',
    'Conhecimento sólido em metodologias ágeis (Scrum/Kanban)',
    'Resiliência e capacidade de trabalhar sob prazos apertados',
    'Compromisso inabalável com a qualidade nas entregas',
    'Forte determinação em aprender novas tecnologias'
  ];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container-width">
        <h2 className="section-title font-display text-gradient">Conhecimentos</h2>
        <p className="section-desc">Minhas competências técnicas, metodologias de trabalho e domínio de idiomas.</p>

        {/* Tab Toggle Buttons */}
        <div className="tab-container">
          <button
            onClick={() => setActiveTab('tech')}
            className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
          >
            <Shield size={16} /> Habilidades Técnicas
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
          >
            <Sparkles size={16} /> Habilidades Pessoais
          </button>
        </div>

        {activeTab === 'tech' ? (
          <div className="tech-grid">
            <div className="skill-category-card glass-card">
              <h3>Front-end</h3>
              <div className="skills-list">
                {techSkills.frontend.map((skill) => (
                  <div key={skill.name} className="skill-tag-wrapper">
                    <span className="skill-tag">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category-card glass-card">
              <h3>Back-end</h3>
              <div className="skills-list">
                {techSkills.backend.map((skill) => (
                  <div key={skill.name} className="skill-tag-wrapper">
                    <span className="skill-tag">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category-card glass-card">
              <h3>Bancos de Dados</h3>
              <div className="skills-list">
                {techSkills.databases.map((skill) => (
                  <div key={skill.name} className="skill-tag-wrapper">
                    <span className="skill-tag">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category-card glass-card">
              <h3>Ferramentas & Outros</h3>
              <div className="skills-list">
                {techSkills.tools.map((skill) => (
                  <div key={skill.name} className="skill-tag-wrapper">
                    <span className="skill-tag">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="soft-languages-container">
            <div className="soft-skills-card glass-card">
              <h3>Como eu trabalho (Soft Skills)</h3>
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <div key={index} className="soft-skill-item">
                    <CheckCircle2 className="check-icon" size={18} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="languages-card glass-card">
              <div className="lang-header">
                <Languages className="lang-icon" size={24} />
                <h3>Idiomas</h3>
              </div>
              <div className="lang-body">
                <div className="lang-item">
                  <div className="lang-info">
                    <span className="lang-name">Português</span>
                    <span className="lang-level">Nativo</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar native" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="lang-item">
                  <div className="lang-info">
                    <span className="lang-name">Inglês</span>
                    <span className="lang-level">Intermediário</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar intermediate" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .tab-container {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--border-color-hover);
        }

        .tab-btn.active {
          color: white;
          background: var(--color-primary);
          border-color: var(--color-primary);
          box-shadow: 0 4px 15px rgba(138, 122, 178, 0.3);
        }

        /* Tech Grid */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }

        .skill-category-card {
          padding: 24px;
        }

        .skill-category-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--color-primary-light);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 10px;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skill-tag-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 8px 12px;
          border-radius: 8px;
          transition: var(--transition-smooth);
        }

        .skill-tag-wrapper:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--color-secondary-transparent);
          transform: translateX(4px);
        }

        .skill-tag {
          font-size: 14.5px;
          font-weight: 500;
          color: var(--text-primary);
        }

        .skill-level {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-secondary);
          background: rgba(0, 229, 255, 0.05);
          padding: 2px 6px;
          border-radius: 4px;
        }

        /* Soft Skills & Languages */
        .soft-languages-container {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 32px;
          align-items: start;
        }

        .soft-skills-card {
          padding: 32px;
        }

        .soft-skills-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--color-primary-light);
        }

        .soft-skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .soft-skill-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .check-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .languages-card {
          padding: 32px;
        }

        .lang-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .lang-icon {
          color: var(--color-secondary);
        }

        .lang-header h3 {
          font-size: 18px;
          font-weight: 600;
        }

        .lang-body {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .lang-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .lang-info {
          display: flex;
          justify-content: space-between;
          font-size: 15px;
        }

        .lang-name {
          font-weight: 500;
          color: var(--text-primary);
        }

        .lang-level {
          color: var(--text-secondary);
        }

        .progress-track {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          border-radius: 3px;
        }

        .progress-bar.native {
          background: var(--color-primary);
        }

        .progress-bar.intermediate {
          background: var(--color-secondary);
        }

        @media (max-width: 950px) {
          .soft-languages-container {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
