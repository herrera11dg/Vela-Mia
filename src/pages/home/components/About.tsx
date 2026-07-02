export default function About() {
  return (
    <section id="sobre" className="bg-[#7a8c5e] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs tracking-[0.3em] text-white/60 uppercase font-medium">Sobre Nós</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6 leading-tight">
            Bem-vindo ao santuário<br className="hidden md:block" /> da luz artesanal!
          </h2>
          <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Elegância funcional e sustentabilidade em cada detalhe. Nascida em 2026, a nossa marca foca-se em oferecer luz e aromas naturais que expressam a sua essência e elevam o seu lar.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-px w-16 bg-white/30"></div>
          <i className="ri-leaf-line text-white/50 text-lg"></i>
          <div className="h-px w-16 bg-white/30"></div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16">
          <div className="bg-white/10 rounded-2xl p-8 md:p-10">
            <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full mb-5">
              <i className="ri-heart-line text-white text-lg"></i>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">A nossa missão</h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              A nossa missão é criar velas artesanais de cera de soja que transformem momentos comuns em experiências sensoriais únicas. Acreditamos que a luz e o aroma têm o poder de mudar o ambiente e o estado de espírito, por isso cada vela é criada com intenção, amor e os melhores ingredientes naturais disponíveis.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mt-4">
              Comprometemo-nos com práticas sustentáveis em toda a nossa cadeia de produção, desde a seleção de matérias-primas até à embalagem final, garantindo que cada produto respeita o ambiente e a saúde de quem o usa.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 md:p-10">
            <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full mb-5">
              <i className="ri-eye-line text-white text-lg"></i>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">A nossa visão</h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Sonhamos com um mundo onde cada lar tem o seu próprio santuário de luz e aroma, criado de forma consciente e sustentável. A Vela Mia aspira a ser a marca de referência em Portugal para velas artesanais de qualidade premium, reconhecida pela autenticidade, beleza e compromisso com a natureza.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mt-4">
              Queremos inspirar uma nova geração de consumidores a escolher produtos feitos com cuidado, que contam uma história e que fazem a diferença — para as pessoas e para o planeta.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: 'ri-leaf-line', label: 'Natural', desc: 'Ingredientes 100% naturais' },
            { icon: 'ri-hand-heart-line', label: 'Artesanal', desc: 'Feito à mão com amor' },
            { icon: 'ri-recycle-line', label: 'Sustentável', desc: 'Eco-friendly e responsável' },
            { icon: 'ri-map-pin-line', label: 'Português', desc: 'Orgulhosamente feito em Portugal' },
          ].map((value) => (
            <div key={value.label} className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-full mx-auto mb-3">
                <i className={`${value.icon} text-white text-xl`}></i>
              </div>
              <p className="text-white font-medium text-sm mb-1">{value.label}</p>
              <p className="text-white/60 text-xs leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
