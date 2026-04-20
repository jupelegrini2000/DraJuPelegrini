import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldPlus, Wrench, Activity, Layers, Sun, Smile, ArrowRight, Plus } from 'lucide-react';

export default function Servicos() {
  const servicos = [
    {
      title: "ESTÉTICA",
      desc: "Harmonização do seu sorriso com procedimentos modernos e minimamente invasivos.",
      icon: Sparkles
    },
    {
      title: "REABILITAÇÃO ORAL",
      desc: "Recuperação completa da função mastigatória e saúde bucal com planejamento detalhado.",
      icon: ShieldPlus
    },
    {
      title: "RESTAURAÇÃO",
      desc: "Tratamento de cáries e fraturas devolvendo a forma e cor natural dos dentes.",
      icon: Wrench
    },
    {
      title: "CANAL",
      desc: "Tratamento endodôntico seguro e indolor para salvar dentes com infecções profundas.",
      icon: Activity
    },
    {
      title: "PRÓTESE",
      desc: "Soluções protéticas personalizadas para repor dentes perdidos com conforto e estética.",
      icon: Layers
    },
    {
      title: "CLAREAMENTO",
      desc: "Técnicas avançadas para um sorriso mais branco, iluminado e confiante.",
      icon: Sun
    },
    {
      title: "ATENDIMENTO INFANTIL",
      desc: "Cuidado odontológico especializado e acolhedor para a saúde bucal das crianças.",
      icon: Smile
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startProgressRef = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.carousel-card')) as HTMLElement[];
    const totalCards = cards.length;

    const updateCards = () => {
      // Lerp para animação fluida
      progressRef.current += (targetProgressRef.current - progressRef.current) * 0.08;
      const time = Date.now() / 1000; // Tempo em segundos para a flutuação

      cards.forEach((card, index) => {
        // Cálculo da diferença considerando o loop contínuo
        let diff = (index - progressRef.current) % totalCards;
        if (diff > totalCards / 2) diff -= totalCards;
        if (diff < -totalCards / 2) diff += totalCards;

        const absDiff = Math.abs(diff);
        const centerProximity = Math.max(1 - absDiff, 0); // 1 no centro, 0 nas bordas
        const isCenter = absDiff < 0.5;
        
        // Cálculo 3D e Escala
        const translateX = diff * 220; // Afastamento lateral maior para acomodar escala
        const translateZ = -absDiff * 250; // Profundidade
        const rotateY = -diff * 15; // Rotação para o centro
        
        // Escala: 1.05 no centro (destaque), caindo para 0.85
        const scale = 0.85 + centerProximity * 0.20; 
        
        // Deslocamento vertical e flutuação suave (3-5s duração, 4-6px variação)
        const baseTranslateY = -centerProximity * 12; // Elevação base de -12px no centro
        const floatOffset = centerProximity * Math.sin(time * 1.5) * 5; // Flutuação de ±5px
        const translateY = baseTranslateY + floatOffset;

        // Opacidade e Blur para os cards laterais
        const opacity = Math.max(1 - absDiff * 0.4, 0.3); 
        const blurAmount = Math.max(absDiff - 0.3, 0) * 4; // Blur sutil nos laterais

        const zIndex = Math.round(100 - absDiff * 10);

        // Sombras mais profundas e difusas no centro
        const shadowY = 10 + centerProximity * 24; // 10px a 34px
        const shadowBlur = 20 + centerProximity * 48; // 20px a 68px
        const shadowOpacity = 0.03 + centerProximity * 0.09; // 0.03 a 0.12
        const boxShadow = `0 ${shadowY}px ${shadowBlur}px rgba(0,0,0, ${shadowOpacity})`;
        const borderColor = isCenter ? 'rgba(184,152,106, 0.3)' : 'rgba(255, 255, 255, 0.4)';

        card.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.opacity = opacity.toString();
        card.style.zIndex = zIndex.toString();
        card.style.boxShadow = boxShadow;
        card.style.borderColor = borderColor;
        card.style.filter = `blur(${blurAmount}px)`;
      });

      rafRef.current = requestAnimationFrame(updateCards);
    };

    rafRef.current = requestAnimationFrame(updateCards);

    const handleDragStart = (clientX: number) => {
      isDraggingRef.current = true;
      startXRef.current = clientX;
      startProgressRef.current = targetProgressRef.current;
      container.style.cursor = 'grabbing';
    };

    const handleDragMove = (clientX: number) => {
      if (!isDraggingRef.current) return;
      const deltaX = clientX - startXRef.current;
      // Ajuste de sensibilidade do arraste
      targetProgressRef.current = startProgressRef.current - deltaX * 0.008;
    };

    const handleDragEnd = () => {
      isDraggingRef.current = false;
      container.style.cursor = 'grab';
      // Snap para o card mais próximo
      targetProgressRef.current = Math.round(targetProgressRef.current);
    };

    // Eventos de Mouse (Desktop)
    const onMouseDown = (e: MouseEvent) => handleDragStart(e.clientX);
    const onMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
    const onMouseUp = () => handleDragEnd();
    const onMouseLeave = () => { if (isDraggingRef.current) handleDragEnd(); };

    // Eventos de Touch (Mobile)
    const onTouchStart = (e: TouchEvent) => handleDragStart(e.touches[0].clientX);
    const onTouchMove = (e: TouchEvent) => handleDragMove(e.touches[0].clientX);
    const onTouchEnd = () => handleDragEnd();

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mouseleave', onMouseLeave);

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mouseleave', onMouseLeave);

      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <section id="servicos" className="py-[120px] px-[7%] relative overflow-hidden bg-[#EFECE7]">
      {/* Elementos de Fundo / Profundidade */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Gradiente radial de palco (centro claro, bordas escuras) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FDFCFB_0%,transparent_80%)] opacity-90"></div>
        
        {/* Halo central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle,rgba(184,152,106,0.06)_0%,transparent_70%)] rounded-full"></div>
        
        {/* Grafismos Odontológicos / Clínicos */}
        <Plus className="absolute top-[15%] left-[10%] text-secundaria opacity-[0.05] w-[40px] h-[40px] md:w-[60px] md:h-[60px] rotate-12" strokeWidth={1} />
        <Sparkles className="absolute bottom-[20%] right-[8%] text-secundaria opacity-[0.06] w-[60px] h-[60px] md:w-[80px] md:h-[80px] -rotate-12" strokeWidth={1} />
        <div className="absolute top-[30%] right-[5%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-secundaria opacity-[0.03]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border border-secundaria opacity-[0.04]"></div>
      </div>

      <div className="text-center mb-[64px] relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-sans font-medium text-[11px] tracking-[3px] uppercase text-destaque block mb-[12px]"
        >
          Serviços
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-serif font-medium text-[clamp(1.7rem,4vw,2.8rem)] text-texto leading-[1.2] mb-[12px]"
        >
          Como Posso Cuidar de Você
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="font-sans text-[15px] font-light text-texto-suave"
        >
          Conheça os principais tratamentos que ofereço
        </motion.p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[450px] cursor-grab select-none mx-auto max-w-[1200px] z-10"
        style={{ perspective: '1200px', touchAction: 'pan-y' }}
      >
        {servicos.map((servico, index) => {
          const Icon = servico.icon;
          return (
            <div
              key={index}
              className="carousel-card absolute top-1/2 left-1/2 w-[280px] md:w-[320px] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl rounded-[24px] p-[40px_32px] flex flex-col items-center text-center border transition-colors duration-500 group"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity, box-shadow, border-color, filter',
              }}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-tr from-[#F4F2EE] to-branco shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center mb-[28px] text-secundaria relative group-hover:scale-110 transition-transform duration-500">
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif font-semibold text-[1.3rem] text-texto mb-[14px] leading-[1.3]">
                {servico.title}
              </h3>
              <p className="font-sans text-[14px] font-light text-texto-suave leading-[1.65]">
                {servico.desc}
              </p>
            </div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        className="text-center mt-[48px] relative z-10"
      >
        <a
          href="https://wa.me/5519995797269?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[8px] border-[1.5px] border-principal text-principal font-sans font-medium text-[13px] px-[36px] py-[15px] rounded-[50px] no-underline transition-all duration-300 hover:bg-principal hover:text-branco hover:-translate-y-[2px]"
        >
          Dúvidas sobre um tratamento?
          <ArrowRight size={16} strokeWidth={2} />
        </a>
      </motion.div>
    </section>
  );
}
