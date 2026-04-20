import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Fade out and move up the text during scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  // Very subtle depth scale for the image
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  return (
    <div ref={containerRef} className="relative h-[150vh] lg:h-[200vh]">
      <section id="home" className="sticky top-0 h-[100svh] flex flex-col lg:flex-row items-stretch overflow-hidden bg-fundo">
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="w-full lg:w-1/2 flex flex-col justify-end lg:justify-center px-[6%] lg:pl-[7%] lg:pr-[5%] pt-[24px] pb-[32px] lg:py-[110px] shrink-0 order-2 lg:order-1 flex-grow"
        >
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-sans font-medium text-[9px] lg:text-[11px] tracking-[3px] uppercase text-destaque mb-[4px] lg:mb-[16px]"
          >
            CIRURGIÃ-DENTISTA · LIMEIRA
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="font-serif font-semibold text-[20px] sm:text-[22px] lg:text-[clamp(1.5rem,5.5vw,3.6rem)] leading-[1.1] lg:leading-[1.15] text-texto"
          >
            <span className="block whitespace-nowrap">Um novo sorriso começa</span>
            <span className="block">com a decisão certa.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="font-sans font-light text-[12px] lg:text-[16px] text-texto-suave leading-[1.4] lg:leading-[1.75] mt-[8px] lg:mt-[20px] max-w-[460px]"
          >
            Cada tratamento é planejado com rigor técnico e atenção individualizada, porque um sorriso saudável começa por uma avaliação honesta.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="font-sans font-medium text-[12px] lg:text-[16px] text-principal leading-[1.4] lg:leading-[1.75] mt-[4px] lg:mt-[12px] max-w-[460px]"
          >
            Mestra em Reabilitação Oral pela USP.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            href="https://wa.me/5519995797269?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] bg-principal text-branco font-sans font-medium text-[12px] lg:text-[13px] tracking-[0.5px] px-[28px] lg:px-[36px] py-[14px] lg:py-[16px] rounded-[50px] no-underline mt-auto lg:mt-[28px] w-fit transition-all duration-300 hover:bg-[#444] hover:-translate-y-[2px] shadow-[0_4px_20px_rgba(184,152,106,0.2)]"
          >
            Agendar Minha Avaliação
            <ArrowRight size={16} strokeWidth={2} />
          </motion.a>
        </motion.div>
        
        <div className="w-full lg:w-1/2 relative overflow-hidden shrink-0 order-1 lg:order-2 h-[55vh] min-h-[350px] max-h-[500px] lg:h-auto lg:max-h-none mt-[40px] lg:mt-0">
          <motion.img
            style={{ scale: imageScale }}
            src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1774889653/Use_the_attached_photo_of_the_woman_maintaining_10_delpmaspu_ps7t9f.webp"
            alt="Consultório Odontológico"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] lg:object-[center_15%] block origin-center"
          />
          <div className="absolute bottom-0 left-0 w-full h-[100px] lg:h-[180px] bg-gradient-to-t from-fundo via-fundo/70 to-transparent pointer-events-none z-[1]"></div>
          <div className="hidden lg:block absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-fundo to-transparent pointer-events-none z-[1]"></div>
        </div>
      </section>
    </div>
  );
}
