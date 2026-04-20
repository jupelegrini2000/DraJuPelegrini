import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const depoimentos = [
  {
    id: 1,
    nome: "Paciente",
    trecho: "A melhor limpeza de tártaro...",
    completo: "Vou falar que foi a melhor limpeza de tártaro que já fiz. Dentista muito delicada.",
    corNormal: "bg-[#FDFCFB]",
    corAtivo: "bg-[#F2EFE9]",
    align: "lg:self-start"
  },
  {
    id: 2,
    nome: "Paciente",
    trecho: "Gostei muito do resultado...",
    completo: "Gostei muito do resultado do clareamento de hoje. Muito obrigado.",
    corNormal: "bg-[#F9F8F6]",
    corAtivo: "bg-[#F2EFE9]",
    align: "lg:self-end lg:mt-[40px]"
  },
  {
    id: 3,
    nome: "Paciente",
    trecho: "Meus dentes ficaram top...",
    completo: "Obrigada pela limpeza e por tirar os tártaros. Meus dentes ficaram top. Obrigada pelo cuidado de sempre.",
    corNormal: "bg-[#F4F2EE]",
    corAtivo: "bg-[#F2EFE9]",
    align: "lg:self-start lg:mt-[-20px]"
  },
  {
    id: 4,
    nome: "Paciente",
    trecho: "O clareamento era algo que eu queria...",
    completo: "O clareamento era algo que eu queria muito fazer só que tinha receio, mas o tratamento da Dra Julia foi melhor do que esperava, sem dor, resultado rápido e atendimento nota 10.",
    corNormal: "bg-[#FAFAF8]",
    corAtivo: "bg-[#F2EFE9]",
    align: "lg:self-end lg:mt-[20px]"
  }
];

export default function Depoimentos() {
  const [ativoId, setAtivoId] = useState<number | null>(null);

  return (
    <section id="depoimentos" className="py-[100px] lg:py-[140px] px-[7%] relative overflow-hidden bg-[#1A1816]">
      {/* Fundo com profundidade */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,152,106,0.08)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
        {/* Textura sutil (noise) */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-center lg:items-start">
        
        {/* Lado Esquerdo: Bloco Institucional */}
        <div className="w-full lg:w-[40%] shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left lg:sticky lg:top-[140px]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-sans font-medium text-[10px] lg:text-[11px] tracking-[3px] uppercase text-secundaria mb-[20px] block"
          >
            DEPOIMENTOS · DRA. JULIA PELEGRINI
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="font-serif font-medium text-[clamp(2rem,4.5vw,3.2rem)] text-branco leading-[1.15] mb-[32px]"
          >
            O que dizem<br className="hidden lg:block" /> sobre mim
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center lg:items-start gap-[12px]"
          >
            <div className="flex items-center gap-[16px]">
              <span className="font-serif text-[32px] text-branco leading-none">5.0</span>
              <div className="flex gap-[4px]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-[18px] h-[18px] fill-secundaria text-secundaria" />
                ))}
              </div>
            </div>
            <p className="font-sans text-[13px] font-light text-[rgba(255,255,255,0.6)] tracking-[0.5px]">
              Depoimentos sobre a Dra. Julia Pelegrini
            </p>
          </motion.div>
        </div>

        {/* Lado Direito: Cards Orgânicos */}
        <div className="w-full flex-1">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[16px] lg:gap-[24px]">
            {depoimentos.map((depoimento, index) => {
              const isAtivo = ativoId === depoimento.id;
              const isOutroAtivo = ativoId !== null && !isAtivo;

              return (
                <motion.div
                  key={depoimento.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.23, 1, 0.32, 1], // easeOutQuint
                    delay: index * 0.1,
                    layout: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
                  }}
                  onClick={() => setAtivoId(isAtivo ? null : depoimento.id)}
                  className={`
                    relative cursor-pointer rounded-[24px] p-[32px] overflow-hidden
                    transition-all duration-500
                    ${isAtivo ? depoimento.corAtivo : depoimento.corNormal}
                    ${isAtivo ? 'shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-20 scale-[1.02] lg:scale-[1.05]' : 'shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1'}
                    ${isOutroAtivo ? 'opacity-40 scale-[0.98] blur-[2px]' : 'opacity-100'}
                    ${depoimento.align}
                    w-full lg:w-[90%]
                  `}
                >
                  <Quote className={`absolute top-[24px] right-[24px] w-[32px] h-[32px] transition-colors duration-500 ${isAtivo ? 'text-secundaria/20' : 'text-secundaria/10'}`} />
                  
                  <motion.div layout="position" className="flex items-center gap-[12px] mb-[20px]">
                    <div className="flex gap-[2px]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-[12px] h-[12px] fill-secundaria text-secundaria" />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div layout="position">
                    <AnimatePresence mode="wait">
                      {isAtivo ? (
                        <motion.p
                          key="completo"
                          initial={{ opacity: 0, filter: "blur(4px)" }}
                          animate={{ opacity: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, filter: "blur(4px)" }}
                          transition={{ duration: 0.3 }}
                          className="font-serif text-[18px] lg:text-[20px] text-texto leading-[1.6] mb-[24px]"
                        >
                          "{depoimento.completo}"
                        </motion.p>
                      ) : (
                        <motion.p
                          key="trecho"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="font-serif text-[16px] lg:text-[18px] text-texto-suave leading-[1.5] mb-[24px] line-clamp-3"
                        >
                          "{depoimento.trecho}"
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div layout="position" className="flex items-center gap-[12px]">
                    <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center font-serif text-[14px] transition-colors duration-500 ${isAtivo ? 'bg-secundaria text-branco' : 'bg-[#E5E5E5] text-texto-suave'}`}>
                      {depoimento.nome.charAt(0)}
                    </div>
                    <span className={`font-sans text-[13px] tracking-[0.5px] transition-colors duration-500 ${isAtivo ? 'text-texto font-medium' : 'text-texto-suave font-light'}`}>
                      {depoimento.nome}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
