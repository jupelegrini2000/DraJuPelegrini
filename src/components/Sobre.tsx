import { motion } from 'motion/react';
import { Check, Quote } from 'lucide-react';

export default function Sobre() {
  return (
    <section id="sobre" className="bg-gradient-to-b from-fundo via-[#FDFCFB] to-[#F9F8F6] py-[100px] px-[7%] relative z-10 rounded-t-[32px] lg:rounded-t-[48px] shadow-[0_-8px_30px_rgba(0,0,0,0.04)] mt-[-20px] lg:mt-[-40px]">
      <motion.span
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-sans font-medium text-[11px] tracking-[3px] uppercase text-destaque block mb-[12px]"
      >
        Quem Sou
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="font-serif font-medium text-[clamp(1.7rem,4vw,2.8rem)] text-texto leading-[1.2]"
      >
        Dra. Julia Pelegrini
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[80px] mt-[48px] items-start">
        <div className="w-full lg:w-[40%] shrink-0 lg:sticky lg:top-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Offset Frame */}
            <div className="absolute inset-0 border-[1px] border-secundaria/30 rounded-[24px] translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5"></div>
            
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-fundo-alt relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <img
                src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1775135417/Gemini_Generated_Image_bcf81ibcf81ibcf8_ckcvq9.webp"
                alt="Dra. Julia Pelegrini"
                className="w-full h-full object-cover object-top block"
              />
              <div className="absolute bottom-0 left-0 w-full p-[32px] bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.4)] to-transparent">
                <h3 className="font-serif font-medium text-[26px] text-branco leading-[1.2] mb-[6px]">
                  Dra. Julia Pelegrini
                </h3>
                <p className="font-sans font-light text-[12px] text-[rgba(255,255,255,0.9)] tracking-[1.5px] uppercase">
                  Mestra em Reabilitação Oral
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 pt-[16px]">
          <div className="flex flex-col gap-[20px] mb-[48px]">
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="font-sans font-light text-[16px] text-texto-suave leading-[1.9]"
            >
              Sou formada em Odontologia e Mestra em Reabilitação Oral pela Faculdade de Odontologia de Bauru (FOB-USP), uma das instituições mais renomadas do país.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="font-sans font-light text-[16px] text-texto-suave leading-[1.9]"
            >
              Minha paixão pela odontologia vai além da técnica; acredito que cada sorriso conta uma história e merece ser tratado com o máximo de cuidado e respeito.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              className="font-sans font-light text-[16px] text-texto-suave leading-[1.9]"
            >
              Atuo oferecendo um atendimento integral que abrange desde a prevenção até procedimentos restauradores e estéticos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              className="font-sans font-light text-[16px] text-texto-suave leading-[1.9]"
            >
              Meu objetivo é proporcionar saúde, função e beleza, sempre com um olhar atento às necessidades e expectativas de cada paciente.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
            className="relative py-[40px] my-[56px]"
          >
            <Quote className="absolute top-0 left-0 text-secundaria opacity-10 w-[80px] h-[80px] -translate-x-4 -translate-y-6" strokeWidth={1} />
            <p className="font-serif italic text-[clamp(1.3rem,3vw,1.8rem)] text-principal leading-[1.5] relative z-10 pl-[24px] lg:pl-[32px] border-l-[2px] border-secundaria/40">
              "A odontologia de excelência une ciência, arte e empatia para transformar não apenas sorrisos, mas a qualidade de vida das pessoas."
            </p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
            className="font-sans font-medium text-[11px] tracking-[2.5px] uppercase text-texto mb-[24px]"
          >
            Formação & Diferenciais
          </motion.h3>

          <div className="flex flex-col gap-[16px]">
            {[
              "Graduação em Odontologia",
              "Mestrado em Reabilitação Oral pela FOB-USP",
              "Atendimento Humanizado e Personalizado",
              "Foco em Prevenção e Saúde Bucal Integral"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 + (index * 0.1) }}
                className="flex items-center gap-[16px] pb-[16px] border-b border-secundaria/10 last:border-0"
              >
                <div className="w-[32px] h-[32px] rounded-full bg-secundaria/5 flex items-center justify-center shrink-0">
                  <Check className="w-[14px] h-[14px] text-secundaria" strokeWidth={1.5} />
                </div>
                <span className="font-sans text-[15px] text-texto-suave font-light tracking-[0.3px] leading-[1.4]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
