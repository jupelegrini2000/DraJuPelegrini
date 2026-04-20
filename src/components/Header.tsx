import { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] px-[6%] py-[18px] flex items-center justify-between transition-all duration-400 ${
          scrolled ? 'bg-fundo shadow-[0_1px_20px_rgba(0,0,0,0.06)]' : 'bg-transparent'
        }`}
      >
        <div className="logo-wrap">
          <a href="#home" className="no-underline">
            <span className="font-serif font-semibold text-[20px] text-texto block leading-[1.2]">
              Dra. Julia Pelegrini
            </span>
            <span className="font-sans font-normal text-[9px] tracking-[2.5px] uppercase text-destaque block mt-[2px]">
              Cirurgiã-Dentista · Limeira
            </span>
          </a>
        </div>
        
        <nav className="hidden lg:flex gap-[32px] items-center">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Quem Sou', href: '#sobre' },
            { label: 'Serviços', href: '#servicos' },
            { label: 'Depoimentos', href: '#depoimentos' },
            { label: 'Perguntas', href: '#faq' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans font-medium text-[11px] tracking-[1.5px] uppercase text-texto no-underline transition-colors duration-300 relative pb-[4px] hover:text-destaque group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-destaque transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://wa.me/5519995797269?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-medium text-[11px] tracking-[1.5px] uppercase text-texto no-underline transition-colors duration-300 relative pb-[4px] hover:text-destaque group"
          >
            Agendar
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-destaque transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <a
          className="hidden lg:flex items-center text-texto transition-colors duration-300 hover:text-destaque"
          href="https://www.instagram.com/dra.juliapelegrini/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram size={18} strokeWidth={1.5} />
        </a>

        <button
          className="lg:hidden flex flex-col gap-[6px] cursor-pointer bg-transparent border-none p-[6px]"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Menu"
        >
          <span className="block w-[26px] h-[2px] bg-texto rounded-[2px] transition-all duration-300"></span>
          <span className="block w-[26px] h-[2px] bg-texto rounded-[2px] transition-all duration-300"></span>
          <span className="block w-[26px] h-[2px] bg-texto rounded-[2px] transition-all duration-300"></span>
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-principal z-[200] flex flex-col items-center justify-center gap-[28px] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-[20px] right-[6%] bg-transparent border-none text-branco cursor-pointer leading-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={36} strokeWidth={1} />
        </button>
        {[
          { label: 'Home', href: '#home' },
          { label: 'Quem Sou', href: '#sobre' },
          { label: 'Serviços', href: '#servicos' },
          { label: 'Depoimentos', href: '#depoimentos' },
          { label: 'Perguntas', href: '#faq' }
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-serif text-[32px] text-branco no-underline transition-opacity duration-300 hover:opacity-65"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://wa.me/5519995797269"
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-[32px] text-branco no-underline transition-opacity duration-300 hover:opacity-65"
          onClick={() => setMobileMenuOpen(false)}
        >
          Agendar
        </a>
      </div>
    </>
  );
}
