export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-[#faf7f2] flex items-center pt-16 md:pt-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 py-16 lg:py-0">
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start justify-center lg:pr-16">
          <span className="text-xs tracking-[0.3em] text-[#7a8c5e] uppercase font-medium mb-6">
            Velas Artesanais de Cera de Soja
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#3a2a1e] leading-tight mb-4">
            Vela Mia
          </h1>
          <p className="font-serif text-lg md:text-xl text-[#7a6a5a] italic font-light mb-8 leading-relaxed">
            Artesanal, natural e feito com amor
          </p>
          <p className="text-[#6a5a4a] text-base leading-relaxed mb-10 max-w-md">
            Cada vela é criada à mão com cera de soja 100% natural, aromas puros e ingredientes sustentáveis. Uma chama que transforma o seu lar num santuário de paz e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#colecao"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#7a8c5e] text-white text-sm font-medium rounded-full hover:bg-[#6a7a50] transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Descubra a Coleção
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#7a8c5e] text-[#7a8c5e] text-sm font-medium rounded-full hover:bg-[#7a8c5e] hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              A Nossa História
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-[#e8e0d5] w-full">
            <div>
              <p className="font-serif text-3xl text-[#3a2a1e] font-medium">100%</p>
              <p className="text-xs text-[#8a7a6a] mt-1 tracking-wide">Cera Natural</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-[#3a2a1e] font-medium">+30</p>
              <p className="text-xs text-[#8a7a6a] mt-1 tracking-wide">Aromas Únicos</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-[#3a2a1e] font-medium">Feito</p>
              <p className="text-xs text-[#8a7a6a] mt-1 tracking-wide">em Portugal</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[55%] relative">
          <div className="relative rounded-3xl overflow-hidden w-full h-[420px] md:h-[580px] lg:h-[680px]">
            <img
              src="https://readdy.ai/api/search-image?query=soy%20wax%20candle%20in%20beige%20matte%20ceramic%20holder%20on%20light%20wooden%20shelf%2C%20monstera%20plant%20leaves%20in%20background%2C%20soft%20natural%20window%20light%20creating%20grid%20shadows%2C%20warm%20ivory%20tones%2C%20lifestyle%20photography%2C%20minimalist%20home%20decor%2C%20artisan%20handmade%20candle%2C%20cozy%20atmosphere%2C%20natural%20textures%2C%20high%20quality%20photography&width=900&height=680&seq=hero-vela-mia-001&orientation=portrait"
              alt="Vela Mia - Vela artesanal de cera de soja"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#faf7f2]/20"></div>
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-8 left-4 md:-left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#f0ebe3] rounded-full">
                <i className="ri-leaf-line text-[#7a8c5e] text-lg"></i>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#3a2a1e]">Eco-Friendly</p>
                <p className="text-xs text-[#8a7a6a]">Sustentável &amp; Natural</p>
              </div>
            </div>
          </div>

          {/* Floating badge 2 */}
          <div className="absolute top-8 right-4 md:-right-4 bg-[#7a8c5e]/90 backdrop-blur-sm rounded-2xl px-5 py-4">
            <p className="text-xs font-medium text-white">✦ Artesanal</p>
            <p className="text-xs text-white/80 mt-0.5">Feito à mão</p>
          </div>
        </div>
      </div>
    </section>
  );
}
