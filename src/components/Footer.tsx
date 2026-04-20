import { Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="relative bg-principal text-branco overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1774895759/Gemini_Generated_Image_q3wcipq3wcipq3wc_bei7ba.webp"
          alt="Consultório Odontológico"
          className="w-full h-full object-cover object-center block"
        />
        <div className="absolute inset-0 bg-principal opacity-75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-principal via-[rgba(44,44,44,0.8)] to-[rgba(44,44,44,0.4)]"></div>
      </div>

      <div className="relative z-10 pt-[120px] px-[7%] pb-[40px]">
        {/* CTA Block */}
        <div className="max-w-[800px] mx-auto text-center mb-[100px]">
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-sans font-medium text-[11px] tracking-[3px] uppercase text-secundaria block mb-[16px]"
          >
            Dê o Primeiro Passo
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="font-serif font-light text-[clamp(2rem,5vw,3.5rem)] text-branco leading-[1.15] mb-[24px]"
          >
            Pronto para transformar o seu sorriso?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="font-sans font-light text-[16px] text-[rgba(255,255,255,0.8)] leading-[1.6] mb-[40px] max-w-[500px] mx-auto"
          >
            Agende uma avaliação e descubra como um planejamento cuidadoso pode fazer a diferença na sua saúde e autoestima.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            href="https://wa.me/5519995797269?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[12px] bg-secundaria text-branco font-sans font-medium text-[13px] tracking-[0.5px] px-[36px] py-[16px] rounded-[50px] no-underline transition-all duration-300 hover:bg-[#A3855A] hover:-translate-y-[2px]"
          >
            Agendar Minha Avaliação
            <ArrowRight size={16} strokeWidth={2} />
          </motion.a>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] max-w-[1200px] mx-auto mb-[64px] border-t border-[rgba(255,255,255,0.1)] pt-[64px]">
          <div className="lg:col-span-2">
            <h3 className="font-serif font-medium text-[1.5rem] mb-[4px]">Dra. Julia Pelegrini</h3>
            <span className="font-sans text-[10px] font-light tracking-[2.5px] uppercase text-secundaria block mb-[20px]">
              Cirurgiã-Dentista
            </span>
            <p className="font-sans text-[14px] font-light text-[rgba(255,255,255,0.65)] leading-[1.75] max-w-[360px] mb-[24px]">
              Atendimento odontológico de excelência, unindo ciência, técnica e um cuidado humanizado para o seu sorriso.
            </p>
            <a
              href="https://www.instagram.com/dra.juliapelegrini/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[8px] w-[40px] h-[40px] rounded-full border border-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.65)] no-underline transition-all duration-300 hover:text-secundaria hover:border-secundaria"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
          </div>

          <div>
            <span className="font-sans font-medium text-[11px] tracking-[2px] uppercase text-branco mb-[24px] block">
              Navegação
            </span>
            <nav className="flex flex-col gap-[16px]">
              {['Home', 'Quem Sou', 'Serviços', 'Perguntas'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="font-sans text-[14px] font-light text-[rgba(255,255,255,0.65)] no-underline transition-colors duration-300 hover:text-secundaria w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className="font-sans font-medium text-[11px] tracking-[2px] uppercase text-branco mb-[24px] block">
              Contato
            </span>
            <div className="flex flex-col gap-[16px]">
              <a href="https://wa.me/5519995797269" target="_blank" rel="noopener noreferrer" className="font-sans text-[14px] font-light text-[rgba(255,255,255,0.65)] no-underline transition-colors duration-300 hover:text-secundaria w-fit">
                (19) 99579-7269
              </a>
              <span className="font-sans text-[14px] font-light text-[rgba(255,255,255,0.65)] leading-[1.6]">
                R. Santa Cruz, 1197 - Centro<br />Limeira - SP, 13480-040
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-[32px] flex flex-col md:flex-row justify-center items-center gap-[16px] max-w-[1200px] mx-auto">
          <p className="font-sans text-[12px] text-[rgba(255,255,255,0.4)] text-center">
            &copy; {new Date().getFullYear()} Dra. Julia Pelegrini. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
