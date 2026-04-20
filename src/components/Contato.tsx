import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="bg-branco py-[120px] px-[8%] relative">
      <div className="flex flex-col lg:flex-row gap-[80px] max-w-[1200px] mx-auto">
        <div className="w-full lg:w-[40%]">
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-sans font-medium text-[11px] tracking-[3px] uppercase text-destaque block mb-[12px]"
          >
            Contato
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="font-serif font-medium text-[clamp(2rem,5vw,2.8rem)] text-texto leading-[1.15] mb-[20px]"
          >
            Vamos agendar a sua consulta?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="font-sans font-light text-[15px] text-texto-suave leading-[1.8] mb-[40px]"
          >
            Entre em contato para tirar dúvidas ou agendar uma avaliação. Será um prazer receber você em nosso consultório.
          </motion.p>

          <div className="flex flex-col gap-[28px]">
            {[
              {
                icon: <Phone size={20} strokeWidth={1.5} className="text-principal" />,
                label: "WhatsApp / Telefone",
                value: "(19) 99579-7269",
                href: "https://wa.me/5519995797269"
              },
              {
                icon: <MapPin size={20} strokeWidth={1.5} className="text-principal" />,
                label: "Endereço",
                value: "R. Santa Cruz, 1197 - Centro, Limeira - SP, 13480-040",
                href: "https://maps.app.goo.gl/..."
              },
              {
                icon: <Clock size={20} strokeWidth={1.5} className="text-principal" />,
                label: "Horário de Atendimento",
                value: "Seg a Sex: 08h às 20h | Sáb: 08h às 14h",
                href: null
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 + (index * 0.1) }}
                className="flex items-center gap-[20px]"
              >
                <div className="w-[48px] h-[48px] rounded-full bg-[#F9F8F6] border border-[rgba(0,0,0,0.03)] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="font-sans font-medium text-[11px] tracking-[1.5px] uppercase text-texto-suave mb-[4px] block">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-sans font-medium text-[15px] text-texto no-underline transition-colors duration-300 hover:text-secundaria">
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-sans font-medium text-[15px] text-texto">
                      {item.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="bg-[#FDFCFB] rounded-[28px] p-[20px] border border-[#E8E3DD] shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full min-h-[500px] flex flex-col"
          >
            <div className="flex-1 rounded-[20px]h overflow-hidden border border-[rgba(0,0,0,0.04)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.411130635415!2d-47.403889!3d-22.563722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8805cfd2a3d3b%3A0x8e8b8b8b8b8b8b8b!2sR.%20Carlos%20Gomes%2C%20575%20-%20Centro%2C%20Limeira%20-%20SP%2C%2013480-010!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-none min-h-[380px] grayscale-[10%] contrast-[1.05]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
