"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRenovo } from "@/context/RenovoContext";
import { COMPANY_INFO } from "@/lib/company-data/portfolio";
import {
  ChatCircleDots,
  X,
  PaperPlaneTilt,
  Sparkle,
  Phone,
  CalendarCheck,
  CheckCircle,
  FilePdf,
  ArrowRight,
  User,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  isLeadCard?: boolean;
}

export function RenovoChatbot() {
  const { locale } = useRenovo();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadNotes, setLeadNotes] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  const initialWelcome =
    locale === "es"
      ? "¡Hola! Soy el asistente virtual del taller de **Renovo Painting Solutions** en Phoenix.\n\n¿Tienes alguna duda sobre **Cabinet Refacing**, el esmaltado de fábrica con **Laca 2K Catalizada** o deseas coordinar una **medición en sitio sin costo** con Raul Burgos?"
      : "Hello! I am the workshop concierge for **Renovo Painting Solutions** in Phoenix.\n\nDo you have questions about **Cabinet Refacing**, our factory-booth **2K Catalyzed Finishes**, or would you like to schedule a **free in-home laser measurement** with Raul Burgos?";

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: initialWelcome,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const quickPrompts =
    locale === "es"
      ? [
          { label: "¿Diferencia entre Refacing y Cocina Nueva?", query: "¿Cuál es la diferencia entre Cabinet Refacing y hacer una cocina nueva?" },
          { label: "¿Cómo es el acabado de Laca 2K?", query: "¿Por qué usan laca catalizada 2K y en qué se diferencia de la pintura tradicional?" },
          { label: "¿Dónde está su taller?", query: "¿Dónde está ubicado su taller en Phoenix y qué zonas atienden?" },
          { label: "Solicitar cotización con Raul", query: "Quiero solicitar una cotización con Raul Burgos para mis gabinetes." },
        ]
      : [
          { label: "Refacing vs. New Kitchen?", query: "What is the difference between cabinet refacing and full custom replacement?" },
          { label: "What is 2K Catalyzed finish?", query: "Why do you use 2K catalyzed polyurethane instead of regular paint?" },
          { label: "Where is the workshop?", query: "Where is your Phoenix workshop located and what areas do you serve?" },
          { label: "Request a quote with Raul", query: "I would like to request an estimate with Raul Burgos for my cabinets." },
        ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
          locale,
        }),
      });

      const data = await res.json();
      const botReply =
        data.reply ||
        (locale === "es"
          ? "Puedes comunicarte directamente con Raul Burgos al (602) 550-4369."
          : "You can reach Raul Burgos directly at (602) 550-4369.");

      const assistantMsg: ChatMessage = {
        id: String(Date.now() + 1),
        role: "assistant",
        content: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chatbot request failed:", err);
      const fallbackMsg: ChatMessage = {
        id: String(Date.now() + 1),
        role: "assistant",
        content:
          locale === "es"
            ? "Ocurrió un problema de conexión momentáneo. Puedes contactar a Raul Burgos directamente al **(602) 550-4369** o llenar tu solicitud en nuestro [Cotizador](/cotizador)."
            : "Temporary connection error. You can reach Raul Burgos directly at **(602) 550-4369** or submit your inquiry on our [Quote Generator](/cotizador).",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadPhone.trim()) return;

    setIsSubmittingLead(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `SOLICITUD DE ASESORÍA: ${leadName} (${leadPhone}) - ${leadNotes}`,
          locale,
          leadInfo: {
            name: leadName.trim(),
            phone: leadPhone.trim(),
            notes: leadNotes.trim(),
          },
        }),
      });

      const data = await res.json();
      setLeadSuccess(true);
      setShowLeadModal(false);

      const confirmationMsg: ChatMessage = {
        id: String(Date.now()),
        role: "assistant",
        content:
          data.reply ||
          (locale === "es"
            ? `¡Listo ${leadName}! Tus datos han sido enviados a Raul Burgos. Se comunicará contigo al teléfono ${leadPhone} a la brevedad.`
            : `All set ${leadName}! Your contact details have been sent to Raul Burgos. He will call you at ${leadPhone} shortly.`),
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, confirmationMsg]);
    } catch (err) {
      console.error("Failed to submit lead:", err);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Simple Markdown renderer for bolding, bullet points, and links
  const renderFormattedText = (text: string) => {
    // Split by newlines
    const paragraphs = text.split("\n\n");
    return paragraphs.map((para, pIdx) => {
      const lines = para.split("\n");
      return (
        <div key={pIdx} className="space-y-1 my-1">
          {lines.map((line, lIdx) => {
            // Check if bullet point
            const isBullet = line.startsWith("• ") || line.startsWith("- ");
            const cleanLine = isBullet ? line.substring(2) : line;

            // Simple parser for **bold** and [link](/path)
            const parts = cleanLine.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

            const renderedContent = parts.map((part, partIdx) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={partIdx} className="font-bold text-[#1A1410]">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              if (part.startsWith("[") && part.includes("](")) {
                const match = part.match(/\[(.*?)\]\((.*?)\)/);
                if (match) {
                  const linkText = match[1];
                  const linkHref = match[2];
                  return (
                    <Link
                      key={partIdx}
                      href={linkHref}
                      onClick={() => setIsOpen(false)}
                      className="font-bold text-[#B85D3B] hover:underline underline-offset-2"
                    >
                      {linkText}
                    </Link>
                  );
                }
              }
              return part;
            });

            return isBullet ? (
              <div key={lIdx} className="flex items-start gap-1.5 pl-1 text-xs sm:text-sm">
                <span className="text-[#B85D3B] font-bold">•</span>
                <span>{renderedContent}</span>
              </div>
            ) : (
              <p key={lIdx} className="text-xs sm:text-sm leading-relaxed">
                {renderedContent}
              </p>
            );
          })}
        </div>
      );
    });
  };

  return (
    <aside aria-label="Renovo Interactive Concierge Chatbot">
      {/* =====================================================================
          1. FLOATING CHAT BUTTON (Bottom-Right Anchor)
      ===================================================================== */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="chat-trigger"
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-4 sm:right-6 z-40 select-none"
          >
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="interactive-control group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1A1410] hover:bg-[#261E18] text-[#FCFAF7] border-2 border-[#C59B27]/70 shadow-2xl hover:scale-[1.03] active:scale-98 transition-all cursor-pointer"
              title={locale === "en" ? "Chat with Renovo Workshop Concierge" : "Conversar con el Asistente Renovo"}
            >
              {/* Online Ping Indicator */}
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white" />
              </span>

              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E5B537] leading-none">
                  {locale === "en" ? "WORKSHOP ASSISTANT" : "ASISTENTE DE TALLER"}
                </span>
                <span className="text-xs sm:text-sm font-serif font-bold text-white leading-tight">
                  {locale === "en" ? "Ask Raul / Help" : "Dudas & Asesoría"}
                </span>
              </div>

              <div className="w-8 h-8 rounded-full bg-[#B85D3B] text-white flex items-center justify-center shadow-xs ml-1 group-hover:rotate-12 transition-transform">
                <ChatCircleDots size={18} weight="fill" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================================
          2. EXPANDED CHAT WINDOW / MODAL
      ===================================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[410px] h-[85vh] sm:h-[620px] max-h-[700px] z-50 flex flex-col rounded-3xl bg-[#FCFAF7] border-2 border-[#DFD6C6] shadow-[0_25px_60px_-15px_rgba(26,20,16,0.45)] overflow-hidden"
          >
            {/* CHAT HEADER */}
            <div className="p-4 sm:p-4.5 bg-[#1A1410] text-[#FCFAF7] border-b-2 border-[#C59B27]/40 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#B85D3B] border border-white/20 flex items-center justify-center text-white shadow-xs">
                    <ChatCircleDots size={22} weight="fill" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#1A1410]" />
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-white leading-tight">
                      {locale === "en" ? "Renovo Concierge" : "Asistente Renovo"}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#C59B27]/20 text-[#E5B537] border border-[#C59B27]/40 font-bold uppercase">
                      Phoenix, AZ
                    </span>
                  </div>
                  <p className="text-[11px] text-[#DFD6C6] font-normal">
                    {locale === "en" ? "Direct Line:" : "Línea Directa:"}{" "}
                    <a href={COMPANY_INFO.phoneHref} className="hover:underline font-bold text-white">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Fast Lead Request Button */}
                <button
                  type="button"
                  onClick={() => setShowLeadModal(true)}
                  className="interactive-control px-2.5 py-1.5 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] text-white text-[11px] font-serif font-bold inline-flex items-center gap-1 shadow-xs transition-colors cursor-pointer"
                  title={locale === "en" ? "Request Call with Raul" : "Pedir llamada de Raul"}
                >
                  <CalendarCheck size={14} weight="bold" />
                  <span className="hidden sm:inline">{locale === "en" ? "Call Request" : "Pedir Cita"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-[#DFD6C6] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Chat"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>
            </div>

            {/* MESSAGES THREAD */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-[#F4EFE6]/60">
              {messages.map((m) => {
                const isUser = m.role === "user";
                return (
                  <div
                    key={m.id}
                    className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-xs ${
                        isUser
                          ? "bg-[#B85D3B] text-white rounded-br-xs"
                          : "bg-[#FCFAF7] text-[#1A1410] border border-[#DFD6C6] rounded-bl-xs"
                      }`}
                    >
                      {renderFormattedText(m.content)}
                    </div>
                    <span className="text-[10px] font-mono text-[#8C7A6B] mt-1 px-1">
                      {m.timestamp}
                    </span>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-[#615245] p-2 bg-[#FCFAF7] border border-[#DFD6C6] rounded-2xl w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#B85D3B] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#B85D3B] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#B85D3B] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs font-serif font-medium pl-1">
                    {locale === "en" ? "Consulting workshop..." : "Consultando taller..."}
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* QUICK PROMPT CHIPS */}
            <div className="px-4 py-2.5 bg-[#FCFAF7] border-t border-[#DFD6C6] flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
              <span className="text-[10px] font-mono uppercase font-bold text-[#8C7A6B] shrink-0">
                {locale === "en" ? "Suggestions:" : "Sugerencias:"}
              </span>
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(q.query)}
                  className="interactive-control whitespace-nowrap px-3 py-1.5 rounded-full border border-[#DFD6C6] bg-[#F4EFE6] hover:bg-[#EAE2D5] text-[#1A1410] text-xs font-serif font-medium hover:border-[#B85D3B] transition-colors shrink-0 cursor-pointer"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* CHAT INPUT FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 sm:p-4 bg-[#FCFAF7] border-t border-[#DFD6C6] shrink-0 space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={
                    locale === "en"
                      ? "Ask about finishes, refacing, or quotes..."
                      : "Pregunta sobre acabados, refacing o cotizaciones..."
                  }
                  className="flex-1 px-4 py-3 rounded-full border-2 border-[#DFD6C6] bg-[#F4EFE6] text-sm sm:text-base text-[#1A1410] placeholder-[#7A6E63] font-medium focus:outline-none focus:border-[#B85D3B]"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="interactive-control w-11 h-11 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] disabled:opacity-50 text-white flex items-center justify-center shadow-md transition-all shrink-0 cursor-pointer"
                  aria-label="Send Message"
                >
                  <PaperPlaneTilt size={18} weight="bold" />
                </button>
              </div>

              <div className="flex items-center justify-between px-2 pt-0.5">
                <span className="text-[10px] text-[#8C7A6B] font-serif">
                  {locale === "en" ? "Crafted by Raul Burgos · Phoenix, AZ" : "Conectado al taller de Raul Burgos · Phoenix"}
                </span>
                <Link
                  href="/cotizador"
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] font-serif font-bold text-[#B85D3B] hover:underline"
                >
                  {locale === "en" ? "Official Quote (PDF) →" : "Cotizador Oficial (PDF) →"}
                </Link>
              </div>
            </form>

            {/* ===============================================================
                INLINE LEAD CAPTURE MODAL OVERLAY
            =============================================================== */}
            <AnimatePresence>
              {showLeadModal && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 z-20 bg-[#1A1410]/95 backdrop-blur-md p-6 flex flex-col justify-between text-[#FCFAF7]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#3A2E26] pb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#E5B537] font-bold">
                          {locale === "en" ? "FREE IN-HOME CONSULTATION" : "ASESORÍA EN SITIO GRATUITA"}
                        </span>
                        <h4 className="text-lg font-serif font-bold text-white">
                          {locale === "en" ? "Request a Call from Raul" : "Solicita una Llamada de Raul"}
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowLeadModal(false)}
                        className="p-1 rounded-full hover:bg-white/10 text-[#DFD6C6] hover:text-white"
                      >
                        <X size={18} weight="bold" />
                      </button>
                    </div>

                    <p className="text-xs text-[#EAE2D5] leading-relaxed">
                      {locale === "en"
                        ? "Leave your phone number below and Raul Burgos will contact you within 24 hours to review your kitchen plans or schedule laser measurements."
                        : "Ingresa tu número telefónico y Raul Burgos te llamará en menos de 24 horas para revisar tu proyecto o coordinar la medición láser sin costo."}
                    </p>

                    <form onSubmit={handleLeadSubmit} className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-mono uppercase text-[#E5B537] font-bold mb-1">
                          {locale === "en" ? "Your Name *" : "Tu Nombre *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder={locale === "en" ? "e.g. Robert Miller" : "ej. Carlos Mendoza"}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-sm text-white focus:outline-none focus:border-[#E5B537]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-[#E5B537] font-bold mb-1">
                          {locale === "en" ? "Phone Number (Cell) *" : "Teléfono Celular *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                          placeholder="(602) 550-4369"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#4A3B30] bg-[#261E18] text-sm text-white focus:outline-none focus:border-[#E5B537]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-[#E5B537] font-bold mb-1">
                          {locale === "en" ? "Project Details (Optional)" : "Detalle breve del proyecto (Opcional)"}
                        </label>
                        <textarea
                          rows={2}
                          value={leadNotes}
                          onChange={(e) => setLeadNotes(e.target.value)}
                          placeholder={
                            locale === "en"
                              ? "e.g. Kitchen cabinet refacing with White Oak doors"
                              : "ej. Cambio de puertas a roble blanco en Scottsdale"
                          }
                          className="w-full px-3.5 py-2 rounded-xl border border-[#4A3B30] bg-[#261E18] text-sm text-white focus:outline-none focus:border-[#E5B537]"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmittingLead}
                        className="interactive-control w-full min-h-[48px] py-3 rounded-full bg-[#B85D3B] hover:bg-[#A34E2F] disabled:opacity-60 text-white text-sm font-serif font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                      >
                        {isSubmittingLead ? (
                          <span>{locale === "en" ? "Sending to Raul..." : "Enviando a Raul..."}</span>
                        ) : (
                          <>
                            <CalendarCheck size={18} weight="bold" />
                            <span>{locale === "en" ? "Send to Raul Burgos" : "Enviar a Raul Burgos"}</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  <div className="pt-2 text-center text-[10px] text-[#A69B8F] border-t border-[#3A2E26]">
                    ✓ {locale === "en" ? "Never spammed · Direct workshop privacy" : "Sin spam · Privacidad directa de taller"}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
