import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Coleção', href: '#colecao' },
    { label: 'Aromas', href: '#aromas' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#faf7f2] shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/f55d8f286982cc72b4405a9014abd498.png"
            alt="Vela Mia Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#4a3728] text-sm font-medium tracking-wide hover:text-[#7a8c5e] transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#colecao"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#7a8c5e] text-white text-sm font-medium rounded-full hover:bg-[#6a7a50] transition-colors duration-200 cursor-pointer whitespace-nowrap"
        >
          Descubra a Coleção
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <i className={`text-[#4a3728] text-xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#faf7f2] border-t border-[#e8e0d5] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#4a3728] text-sm font-medium py-1 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#colecao"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#7a8c5e] text-white text-sm font-medium rounded-full cursor-pointer whitespace-nowrap"
          >
            Descubra a Coleção
          </a>
        </div>
      )}
    </header>
  );
}
