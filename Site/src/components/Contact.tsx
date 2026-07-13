import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success notification after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container-width">
        <h2 className="section-title font-display text-gradient">Contato</h2>
        <p className="section-desc">Vamos conversar! Entre em contato diretamente ou envie uma mensagem usando o formulário.</p>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-panel">
            <h3 className="panel-heading">Informações de Contato</h3>
            
            <div className="info-cards-list">
              <a href="mailto:david.raphael.gustavo@gmail.com" className="info-card glass-card">
                <div className="info-icon-wrapper mail">
                  <Mail size={20} />
                </div>
                <div className="info-details">
                  <span>E-mail</span>
                  <p>david.raphael.gustavo@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/5511994844038" target="_blank" rel="noopener noreferrer" className="info-card glass-card">
                <div className="info-icon-wrapper whatsapp">
                  <Phone size={20} />
                </div>
                <div className="info-details">
                  <span>WhatsApp</span>
                  <p>+55 11 99484-4038</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/david-raphael-gustavo-neves-1674361bb/" target="_blank" rel="noopener noreferrer" className="info-card glass-card">
                <div className="info-icon-wrapper linkedin">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="info-details">
                  <span>LinkedIn</span>
                  <p>david-raphael-gustavo-neves</p>
                </div>
              </a>

              <div className="info-card glass-card">
                <div className="info-icon-wrapper location">
                  <MapPin size={20} />
                </div>
                <div className="info-details">
                  <span>Localização</span>
                  <p>São Caetano do Sul, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel glass-card">
            <h3 className="panel-heading">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Seu Nome *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nome Completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Seu E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="exemplo@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              <button type="submit" className="btn-send" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : submitted ? (
                  <span className="sent-success"><Check size={18} /> Enviado!</span>
                ) : (
                  <>Enviar Mensagem <Send size={16} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: start;
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
        }

        .panel-heading {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-primary);
        }

        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-card {
          display: flex;
          gap: 20px;
          padding: 20px;
          align-items: center;
          text-decoration: none;
        }

        .info-card:hover {
          transform: translateY(-2px) !important;
        }

        .info-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .info-icon-wrapper.mail {
          background: rgba(138, 122, 178, 0.1);
          color: var(--color-primary-light);
        }

        .info-icon-wrapper.whatsapp {
          background: rgba(37, 211, 102, 0.08);
          color: #25d366;
        }

        .info-icon-wrapper.linkedin {
          background: rgba(0, 119, 181, 0.08);
          color: #0077b5;
        }

        .info-icon-wrapper.location {
          background: rgba(0, 229, 255, 0.08);
          color: var(--color-secondary);
        }

        .info-details {
          display: flex;
          flex-direction: column;
        }

        .info-details span {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 2px;
        }

        .info-details p {
          font-size: 15px;
          color: var(--text-primary);
          font-weight: 500;
          word-break: break-all;
        }

        /* Contact Form */
        .contact-form-panel {
          padding: 32px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .form-group input, .form-group textarea {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 12px 16px;
          color: var(--text-primary);
          font-size: 15px;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--color-primary-light);
          box-shadow: 0 0 8px rgba(171, 158, 209, 0.2);
        }

        .btn-send {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--color-primary) 0%, #685a85 100%);
          border: none;
          color: white;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 12px rgba(138, 122, 178, 0.15);
          margin-top: 10px;
        }

        .btn-send:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(138, 122, 178, 0.3);
        }

        .btn-send:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .sent-success {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #25d366;
        }

        @media (max-width: 950px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
