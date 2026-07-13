import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Olá! Sou o assistente virtual do David. Como posso ajudar você hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    if (!apiKey) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: 'model', content: 'Erro: A chave da API do Gemini (VITE_GEMINI_API_KEY) não está configurada no arquivo .env.' }
        ]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-pro-latest',
        systemInstruction: `Você é o assistente virtual do portfólio de David Raphael Gustavo Neves.
Responda sempre de forma amigável, educada e bem concisa. Use as informações abaixo para responder dúvidas dos recrutadores ou visitantes:
- Nome: David Raphael Gustavo Neves
- Cargo: Desenvolvedor Full Stack
- Resumo: Mais de 2 anos de experiência em projetos web (front-end e back-end), com foco em soluções escaláveis e otimizadas.
- Formação Acadêmica: Tecnólogo em Análise e Desenvolvimento de Sistemas (FATEC São Caetano do Sul, 2023-2024) e Ensino Médio Técnico (ETEC Jorge Street, 2020-2022).
- Experiência atual: Programador Full Stack na ShiftMC (2023 - Atual). Trabalha com Angular, Node.js, Express, C#, integrações com Dynamics CRM e Power BI/Apps.
- Experiência anterior: Freelance e Projetos Acadêmicos (2022-2024) com REST APIs, Angular, e banco de dados SQL. Medalhista em maratonas de programação e Hackathons.
- Habilidades Técnicas: React, Angular, TypeScript, JavaScript, HTML5, CSS3, C#, .NET, Node.js, Express, PostgreSQL, MySQL, SQL Server, Git.
- Soft Skills: Trabalho em equipe, comunicação, metodologias ágeis (Scrum/Kanban) e proatividade.
- Idiomas: Português (Nativo) e Inglês (Intermediário).
- Contato: O WhatsApp do David é 11 99484-4038.`
      });

      const result = await model.generateContent(userMessage);
      const responseText = result.response.text();

      setMessages((prev) => [...prev, { role: 'model', content: responseText }]);
    } catch (error) {
      console.error('Erro ao chamar a API do Gemini:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: 'Desculpe, ocorreu um erro ao tentar processar sua mensagem. Tente novamente mais tarde.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={() => setIsOpen(true)}
        aria-label="Abrir chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div className={`chat-window glass-card ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="bot-avatar">
              <Bot size={20} />
            </div>
            <div>
              <h3>Assistente Virtual</h3>
              <span className="status">Online</span>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-wrapper ${msg.role}`}>
              <div className="message-avatar">
                {msg.role === 'model' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className={`message-bubble ${msg.role}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message-wrapper model">
              <div className="message-avatar">
                <Bot size={16} />
              </div>
              <div className="message-bubble model typing">
                <Loader2 size={16} className="spinner" />
                <span>Digitando...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            disabled={isLoading}
          />
          <button type="submit" disabled={!input.trim() || isLoading} className="send-btn">
            <Send size={18} />
          </button>
        </form>
      </div>

      <style>{`
        .chat-toggle-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--color-primary);
          color: white;
          border: none;
          box-shadow: 0 8px 24px var(--color-primary-transparent);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          transition: var(--transition-smooth);
        }

        .chat-toggle-btn:hover {
          transform: scale(1.05) translateY(-4px);
          box-shadow: 0 12px 30px rgba(168, 85, 247, 0.4);
        }

        .chat-toggle-btn.hidden {
          transform: scale(0);
          opacity: 0;
          pointer-events: none;
        }

        .chat-window {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 350px;
          height: 500px;
          max-height: calc(100vh - 64px);
          max-width: calc(100vw - 64px);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          transform-origin: bottom right;
          transform: scale(0.9) translateY(20px);
          opacity: 0;
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          background: var(--bg-card);
        }

        .chat-window.open {
          transform: scale(1) translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
          background: rgba(0, 0, 0, 0.2);
        }

        .light-mode .chat-header {
          background: rgba(255, 255, 255, 0.5);
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bot-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-primary-transparent);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-primary);
        }

        .chat-header h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .chat-header .status {
          font-size: 12px;
          color: var(--color-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .chat-header .status::before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-secondary);
          box-shadow: 0 0 8px var(--color-secondary);
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
          transition: var(--transition-smooth);
        }

        .close-btn:hover {
          color: var(--text-primary);
          transform: rotate(90deg);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .message-wrapper {
          display: flex;
          gap: 10px;
          align-items: flex-end;
          max-width: 85%;
        }

        .message-wrapper.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          flex-shrink: 0;
          border: 1px solid var(--border-color);
        }

        .message-wrapper.user .message-avatar {
          color: var(--color-secondary);
          border-color: var(--color-secondary-transparent);
        }

        .message-wrapper.model .message-avatar {
          color: var(--color-primary);
          border-color: var(--color-primary-transparent);
        }

        .message-bubble {
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-primary);
        }

        .message-bubble.user {
          background: var(--color-primary);
          color: white;
          border-bottom-right-radius: 4px;
          box-shadow: 0 4px 12px var(--color-primary-transparent);
        }

        .message-bubble.model {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-bottom-left-radius: 4px;
        }
        
        .light-mode .message-bubble.model {
          background: #ffffff;
        }

        .message-bubble.typing {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .chat-input-area {
          padding: 16px;
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 10px;
          background: rgba(0, 0, 0, 0.1);
        }
        
        .light-mode .chat-input-area {
          background: rgba(255, 255, 255, 0.3);
        }

        .chat-input-area input {
          flex: 1;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 12px 16px;
          border-radius: 20px;
          color: var(--text-primary);
          font-size: 14px;
          outline: none;
          transition: var(--transition-smooth);
        }

        .light-mode .chat-input-area input {
          background: #ffffff;
        }

        .chat-input-area input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px var(--color-primary-transparent);
        }

        .send-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-primary);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
          flex-shrink: 0;
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 12px var(--color-primary-transparent);
        }

        .send-btn:disabled {
          background: var(--bg-secondary);
          color: var(--text-muted);
          cursor: not-allowed;
          border: 1px solid var(--border-color);
        }

        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 32px);
            right: 16px;
            bottom: 16px;
          }
          
          .chat-toggle-btn {
            right: 16px;
            bottom: 16px;
          }
        }
      `}</style>
    </>
  );
}
