import { Mail, Phone, MapPin, Send, Check, ArrowUpRight } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_ID as string,
  );

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container-width">
        <div className="section-header">
          <span className="section-kicker">05 / contato</span>
          <h2 className="section-title font-display">Vamos conversar?</h2>
          <p className="section-desc">
            Estou aberto a novas oportunidades, projetos ou apenas para trocar
            uma ideia sobre desenvolvimento. Escolha o canal que preferir.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-panel">
            <div className="info-cards-list">
              <a
                href="mailto:david.raphael.gustavo@gmail.com"
                className="info-card glass-card"
              >
                <div className="info-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="info-details">
                  <span className="font-mono">E-mail</span>
                  <p>david.raphael.gustavo@gmail.com</p>
                </div>
                <ArrowUpRight size={16} className="info-arrow" />
              </a>

              <a
                href="https://wa.me/5511994844038"
                target="_blank"
                rel="noopener noreferrer"
                className="info-card glass-card"
              >
                <div className="info-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="info-details">
                  <span className="font-mono">WhatsApp</span>
                  <p>+55 11 99484-4038</p>
                </div>
                <ArrowUpRight size={16} className="info-arrow" />
              </a>

              <a
                href="https://www.linkedin.com/in/david-raphael-gustavo-neves-1674361bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="info-card glass-card"
              >
                <div className="info-icon-wrapper">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="info-details">
                  <span className="font-mono">LinkedIn</span>
                  <p>/in/david-raphael-gustavo-neves</p>
                </div>
                <ArrowUpRight size={16} className="info-arrow" />
              </a>

              <div className="info-card glass-card static-card">
                <div className="info-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div className="info-details">
                  <span className="font-mono">Localização</span>
                  <p>Santo André, SP — Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel glass-card">
            <h3 className="panel-heading">Mandar uma mensagem direta</h3>

            {state.succeeded ? (
              <div className="form-success-box">
                <span className="sent-success">
                  <Check size={18} /> Obrigado! Sua mensagem foi enviada com
                  sucesso.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nome *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Como posso te chamar?"
                    />
                    <ValidationError
                      prefix="Nome"
                      field="name"
                      errors={state.errors}
                      className="submit-error"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="seu@email.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="submit-error"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Sobre o que vamos conversar?"
                  />
                  <ValidationError
                    prefix="Assunto"
                    field="subject"
                    errors={state.errors}
                    className="submit-error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Escreva sua mensagem..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="submit-error"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-send"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      Enviar mensagem <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          border-top: 1px solid var(--border-color);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1fr;
          gap: 32px;
          align-items: center;
          justify-content: center;
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
        }

        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .info-card {
          display: flex;
          gap: 16px;
          padding: 18px 20px;
          align-items: center;
          text-decoration: none;
        }

        .info-card:not(.static-card):hover .info-arrow {
          color: var(--color-primary);
          transform: translate(2px, -2px);
        }

        .info-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: var(--surface-subtle);
          border: 1px solid var(--border-color);
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .info-details {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }

        .info-details span {
          font-size: 11.5px;
          color: var(--text-muted);
          margin-bottom: 2px;
        }

        .info-details p {
          font-size: 14.5px;
          color: var(--text-primary);
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .info-arrow {
          color: var(--text-muted);
          transition: var(--transition-smooth);
          flex-shrink: 0;
        }

        /* Contact Form */
        .contact-form-panel {
          padding: 30px;
        }

        .panel-heading {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 22px;
          color: var(--text-primary);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .form-group input,
        .form-group textarea {
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 11px 14px;
          color: var(--text-primary);
          font-size: 14.5px;
          outline: none;
          transition: var(--transition-smooth);
          resize: vertical;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-muted);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--color-primary);
          background: var(--bg-primary);
        }

        .btn-send {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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
          margin-top: 4px;
          align-self: flex-start;
        }

        .btn-send:hover:not(:disabled) {
          background: var(--color-primary-light);
          border-color: var(--color-primary-light);
          transform: translateY(-1px);
        }

        .btn-send:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-success-box {
          padding: 20px;
          border-radius: 8px;
          background: var(--color-secondary-transparent);
          border: 1px solid var(--color-secondary);
          color: var(--color-secondary);
          font-weight: 500;
        }

        .sent-success {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .submit-error {
          font-size: 13.5px;
          color: #e57373;
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .btn-send {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
