import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  role: "user" | "model";
  content: string;
}

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content:
        "Oi! Se quiser tirar alguma dúvida rápida sobre a experiência, projetos ou contato do David, pode perguntar por aqui.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    if (!apiKey) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "model",
            content:
              "A chave da API (VITE_GEMINI_API_KEY) não está configurada no ambiente no momento. Você pode falar diretamente com o David pelo WhatsApp (11 99484-4038) ou e-mail!",
          },
        ]);
        setIsLoading(false);
      }, 600);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-pro-latest",
        systemInstruction: `Você responde dúvidas no portfólio de David Raphael Gustavo Neves de forma natural, humana, direta e sem jargões robóticos. Use as informações abaixo:
- Nome: David Raphael Gustavo Neves
- Cargo: Desenvolvedor Full Stack (Santo André, SP)
- Resumo: Mais de 2 anos de experiência prática em desenvolvimento web (front-end e back-end).
- Formação Acadêmica: Tecnólogo em Análise e Desenvolvimento de Sistemas (FATEC São Caetano do Sul, 2023-2024) e Ensino Médio Técnico em Desenvolvimento de Sistemas (ETEC Jorge Street, 2020-2022).
- Experiência atual: Programador Full Stack na ShiftMC (2023 - Atual). Trabalha com Angular, Node.js, Express, C#, integrações com Dynamics CRM e Power BI/Apps.
- Experiência anterior: Projetos independentes (Freelance) e acadêmicos (2022-2024) com REST APIs, Angular, C# e bancos SQL. Premiado em maratonas de programação e Hackathons.
- Habilidades Técnicas: Angular, React, TypeScript, JavaScript, HTML5, CSS3/SCSS, C#, .NET, Node.js, Express, PostgreSQL, MySQL, SQL Server, Git.
- Idiomas: Português (Nativo) e Inglês (Intermediário).
- Contato: WhatsApp (11) 99484-4038 e e-mail david.raphael.gustavo@gmail.com.`,
      });

      const result = await model.generateContent(userMessage);
      const responseText = result.response.text();

      setMessages((prev) => [
        ...prev,
        { role: "model", content: responseText },
      ]);
    } catch (error) {
      console.error("Erro ao chamar a API do Gemini:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content:
            "Não consegui responder agora, mas você pode chamar o David direto no WhatsApp: (11) 99484-4038.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* <button
        className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Abrir conversa rápida"
      >
        <MessageCircle size={20} />
        <span className="chat-toggle-label">Dúvidas?</span>
      </button> */}

      <div className={`chat-window glass-card ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <span className="chat-dot" />
            <div>
              <h3>Pergunte sobre o David</h3>
              <span className="chat-subtitle">Resumo rápido do currículo</span>
            </div>
          </div>
          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar chat"
          >
            <X size={18} />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-wrapper ${msg.role}`}>
              <div className={`message-bubble ${msg.role}`}>{msg.content}</div>
            </div>
          ))}
          {isLoading && (
            <div className="message-wrapper model">
              <div className="message-bubble model typing">
                <Loader2 size={15} className="spinner" />
                <span>Escrevendo...</span>
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
            placeholder="Ex: Qual a experiência com Angular?"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="send-btn"
            aria-label="Enviar pergunta"
          >
            <Send size={16} />
          </button>
        </form>
      </div>

      <style>{`
        .chat-toggle-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          height: 46px;
          padding: 0 18px;
          border-radius: 99px;
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-color-hover);
          box-shadow: var(--shadow-md);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 1000;
          font-size: 14px;
          font-weight: 500;
          transition: var(--transition-smooth);
        }

        .chat-toggle-btn svg {
          color: var(--color-primary);
        }

        .chat-toggle-btn:hover {
          transform: translateY(-2px);
          border-color: var(--color-primary);
          background: var(--bg-card-hover);
        }

        .chat-toggle-btn.hidden {
          transform: scale(0.9);
          opacity: 0;
          pointer-events: none;
        }

        .chat-window {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 340px;
          height: 460px;
          max-height: calc(100vh - 48px);
          max-width: calc(100vw - 48px);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          transform-origin: bottom right;
          transform: scale(0.95) translateY(12px);
          opacity: 0;
          pointer-events: none;
          transition: var(--transition-smooth);
          overflow: hidden;
          background: var(--bg-card);
          box-shadow: var(--shadow-lg);
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
          padding: 14px 18px;
          border-bottom: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .chat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-secondary);
          flex-shrink: 0;
        }

        .chat-header h3 {
          font-size: 14.5px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .chat-subtitle {
          font-size: 12px;
          color: var(--text-muted);
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
        }

        .close-btn:hover {
          color: var(--text-primary);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .message-wrapper {
          display: flex;
          max-width: 88%;
        }

        .message-wrapper.user {
          align-self: flex-end;
        }

        .message-wrapper.model {
          align-self: flex-start;
        }

        .message-bubble {
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--text-primary);
        }

        .message-bubble.user {
          background: var(--color-primary);
          color: var(--text-on-accent);
          border-bottom-right-radius: 3px;
        }

        .message-bubble.model {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-bottom-left-radius: 3px;
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
          padding: 12px;
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 8px;
          background: var(--bg-secondary);
        }

        .chat-input-area input {
          flex: 1;
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          padding: 10px 12px;
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 13.5px;
          outline: none;
          transition: var(--transition-smooth);
        }

        .chat-input-area input::placeholder {
          color: var(--text-muted);
        }

        .chat-input-area input:focus {
          border-color: var(--color-primary);
        }

        .send-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: var(--color-primary);
          color: var(--text-on-accent);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
          flex-shrink: 0;
        }

        .send-btn:hover:not(:disabled) {
          background: var(--color-primary-light);
        }

        .send-btn:disabled {
          background: var(--surface-subtle);
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
