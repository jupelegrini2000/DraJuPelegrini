import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Com que frequência devo ir ao dentista?",
      a: "Recomenda-se uma visita de rotina a cada 6 meses para profilaxia (limpeza) e avaliação geral. Isso ajuda a prevenir problemas maiores e manter a saúde bucal em dia."
    },
    {
      q: "O clareamento dental enfraquece os dentes?",
      a: "Não. O clareamento realizado com supervisão profissional é totalmente seguro. Ele age apenas nos pigmentos que escurecem o dente, sem alterar ou enfraquecer a estrutura dentária."
    },
    {
      q: "Sinto dor ao tomar gelado. O que pode ser?",
      a: "A sensibilidade ao frio pode indicar retração gengival, desgaste do esmalte, cárie ou restaurações infiltradas. É fundamental uma avaliação clínica para identificar a causa e indicar o tratamento correto."
    },
    {
      q: "Preciso agendar consulta?",
      a: "Sim. O atendimento é realizado mediante agendamento para garantir organização, pontualidade e um cuidado individualizado para cada paciente.\n\nDessa forma, conseguimos oferecer uma avaliação mais completa, sem pressa, além de reduzir o tempo de espera e proporcionar uma experiência mais confortável.\n\nEm casos de urgência, fazemos o possível para encaixar atendimentos no mesmo dia."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F4F2EE] py-[140px] px-[8%] relative">
      <div className="text-center mb-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-[1px] h-[40px] bg-[rgba(184,152,106,0.4)] mx-auto mb-[20px]"
        ></motion.div>
        
        <motion.span
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-sans font-medium text-[11px] tracking-[4px] uppercase text-secundaria block mb-[20px]"
        >
          Dúvidas Frequentes
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="font-serif font-light text-[clamp(2.5rem,6vw,4rem)] text-texto leading-[1.1]"
        >
          Perguntas <em>Comuns</em>
        </motion.h2>
      </div>

      <div className="max-w-[1100px] mx-auto flex flex-col gap-[12px] lg:gap-[20px]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 + (index * 0.1) }}
              className={`faq-card bg-[rgba(255,255,255,0.7)] backdrop-blur-[20px] rounded-[16px] lg:rounded-[28px] border overflow-hidden transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.02)] lg:shadow-[0_8px_30px_rgba(0,0,0,0.03)] ${
                isOpen 
                  ? 'border-[rgba(184,152,106,0.3)] lg:border-[rgba(184,152,106,0.4)] shadow-[0_8px_24px_rgba(0,0,0,0.04)] lg:shadow-[0_24px_60px_rgba(0,0,0,0.06)]' 
                  : 'border-[rgba(255,255,255,0.8)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)] lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-[1px] lg:hover:-translate-y-[2px] hover:border-[rgba(184,152,106,0.2)]'
              }`}
            >
              <button
                className="flex items-start lg:items-center gap-[12px] lg:gap-[24px] p-[20px_16px] lg:p-[32px_40px] cursor-pointer w-full bg-transparent border-none text-left"
                onClick={() => toggleFaq(index)}
              >
                <div className="w-[24px] lg:w-[56px] lg:h-[56px] lg:rounded-full flex items-start lg:items-center justify-start lg:justify-center shrink-0 pt-[2px] lg:pt-0 lg:shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all duration-500 lg:bg-branco text-secundaria lg:text-texto-suave">
                  <span className="font-sans font-medium text-[10px] lg:font-serif lg:text-[24px] tracking-[1px] lg:tracking-normal leading-none opacity-60 lg:opacity-100">0{index + 1}</span>
                </div>
                
                <h3 className={`font-serif font-medium text-[1.1rem] lg:text-[clamp(1.2rem,2.5vw,1.6rem)] flex-1 pr-[8px] lg:pr-[16px] leading-[1.3] lg:leading-[1.4] transition-colors duration-400 ${
                  isOpen ? 'text-principal' : 'text-texto'
                }`}>
                  {faq.q}
                </h3>
                
                <div className={`w-[28px] h-[28px] lg:w-[48px] lg:h-[48px] rounded-full border-[0.5px] flex items-center justify-center shrink-0 transition-all duration-400 text-[16px] lg:text-[20px] leading-none mt-[2px] lg:mt-0 ${
                  isOpen 
                    ? 'bg-secundaria text-branco border-secundaria shadow-[0_4px_12px_rgba(184,152,106,0.2)] lg:shadow-[0_8px_20px_rgba(184,152,106,0.3)]' 
                    : 'border-[rgba(0,0,0,0.1)] text-texto-suave'
                }`}>
                  <Plus size={16} strokeWidth={1.5} className={`transition-transform duration-500 ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? 'max-h-[400px] lg:max-h-[300px]' : 'max-h-0'
              }`}>
                <div className="px-[16px] pb-[24px] pl-[48px] lg:px-[40px] lg:pb-[36px] lg:pl-[120px]">
                  <div className="h-[1px] bg-gradient-to-r from-[rgba(184,152,106,0.2)] lg:from-[rgba(184,152,106,0.3)] via-[rgba(184,152,106,0.05)] lg:via-[rgba(184,152,106,0.1)] to-transparent mb-[16px] lg:mb-[24px]"></div>
                  <p className="font-sans font-light text-[14px] lg:text-[16px] text-texto-suave leading-[1.6] lg:leading-[1.9] whitespace-pre-wrap">
                    {faq.a}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
