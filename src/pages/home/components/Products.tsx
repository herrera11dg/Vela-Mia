const products = [
  {
    id: 1,
    name: 'Vela em Vaso',
    price: '20€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/076ffc33cced07cacaa947bd2ef7f195.jpeg',
  },
  {
    id: 2,
    name: 'Vela em Vaso Decoração Personalizada',
    price: '25€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/97d42d8ac4ab042b2db7c65331c8b8fa.jpeg',
  },
  {
    id: 3,
    name: 'Bouquet de Rosas',
    price: 'A partir de 50€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/487beb695b07a487e7af8d7d1e36dc95.jpeg',
  },
  {
    id: 4,
    name: 'Bouquet de Girasoles',
    price: 'A partir de 50€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/881c30c0a7af803383b2465af2eda468.jpeg',
  },
  {
    id: 5,
    name: 'Buquês Personalizados',
    price: '10€',
    image: 'https://readdy.ai/api/search-image?query=small%20personalized%20handmade%20flower%20bouquet%20with%20sunflower%20peony%20and%20mixed%20flowers%2C%20white%20background%2C%20artisan%20craft%2C%20product%20photography&width=400&height=400&seq=prod5&orientation=squarish',
  },
  {
    id: 6,
    name: 'Velas de Sobremesa',
    price: '30€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/03d2414bf61f64537107213013afcaaa.jpeg',
  },
  {
    id: 7,
    name: 'Vela Coração',
    price: '20€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/427ef62217612605e8626190ac6b2c95.jpeg',
  },
  {
    id: 8,
    name: 'Aquário com Girassol',
    price: '15€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/ac711397955d14fdf37b88113f9d46ca.jpeg',
  },
  {
    id: 9,
    name: 'Peônia&nbsp;',
    price: '9€ a unidade',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/dd9c68a699dc9b85a50235231404d70d.jpeg',
  },
  {
    id: 10,
    name: 'Peônia en tule',
    price: '7€ / 6€ a partir de 6 un.',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/c4b7f63789a05e301017c8fcea8a248a.jpeg',
  },
  {
    id: 11,
    name: 'Peônia com Caixa',
    price: '10€ / 8€ a partir de 6 un.',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/f71ddf609c3e21250c636e12bc7d1f78.jpeg',
  },
  {
    id: 12,
    name: 'Pacote Coração e Rosas',
    price: '30€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/d49dffc195fb1b9d9951795aaefe67f2.jpeg',
  },
  {
    id: 13,
    name: 'Vela Vaso com Rosas (500g)',
    price: '40€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/cd57b65e9d8879098a5c89c99f6c44d7.jpeg',
  },
  {
    id: 14,
    name: 'Vela Vaso com Rosa',
    price: '20€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/b18224ef9cc1b53de1fd5b487067b30b.jpeg',
  },
  {
    id: 15,
    name: 'Vela de Vidro com Mini Girassois',
    price: '15€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/9f31e767d0ba6ebe1f4bfb9b93a0dc18.jpeg',
  },
  {
    id: 16,
    name: 'Cartas com Vela',
    price: '8€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/7941ae68f7919898401b010f5dfadcef.jpeg',
  },
  {
    id: 17,
    name: 'Cartas com Vela (Enciendela)',
    price: '5€ a partir de 6 un.',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/7941ae68f7919898401b010f5dfadcef.jpeg',
  },
  {
    id: 18,
    name: 'Margaritas',
    price: '5€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/855cfdc4b173846c8df0c5c75cfbe985.jpeg',
  },
  {
    id: 19,
    name: 'Urso com Coração (6.5cm x 4.5cm)',
    price: '8€ a unidade',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/759cde332df8065664f1223cb372396a.jpeg',
  },
  {
    id: 20,
    name: 'Oso (4.5cm x 2.5cm)',
    price: '5€ a unidade',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/fac08bf97cc249ff7b5ad64a5631c3d4.jpeg',
  },
  {
    id: 21,
    name: 'Caixa de Urso + Coração',
    price: '20€',
    image: 'https://readdy.ai/api/search-image?query=gift%20box%20with%20bear%20and%20heart%20decoration%2C%20handmade%20artisan%20gift%20set%2C%20white%20background%2C%20romantic%20cute%20gift%2C%20product%20photography&width=400&height=400&seq=prod21&orientation=squarish',
  },
  {
    id: 22,
    name: 'Coração de Flores',
    price: '5€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/3b46f09fbcff9c18fcd8242af4917a7e.jpeg',
  },
  {
    id: 23,
    name: 'Bumble (6cm x 6cm)',
    price: '10€ / 8€ atacado',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/7a8dc39c50f804f625fcea84a48d1f82.jpeg',
  },
  {
    id: 24,
    name: 'Bumble (4cm x 4cm)',
    price: '5€ / 4€ atacado',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/322bf772a6a7e73781f82d843040092f.jpeg',
  },
  {
    id: 25,
    name: 'Vela de Mármore',
    price: '10€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/f83c19fe0495e4dd5f7dd47910c42672.jpeg',
  },
  {
    id: 26,
    name: 'Lembrete do Cartão',
    price: '7€ a partir de 6 un.',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/570a6aa38146f85e8a01f383f97240c0.jpeg',
  },
  {
    id: 27,
    name: 'Casal',
    price: '10€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/e22c500f7cd13bf5298bc6ab96a2669f.jpeg',
  },
  {
    id: 28,
    name: 'Coração de Anjo',
    price: '6€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/2d49561dc914cf61a373f043c4d09b4c.jpeg',
  },
  {
    id: 29,
    name: 'Anjo',
    price: '7€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/0eebadb068a42ee2b35051308dab8eda.jpeg',
  },
  {
    id: 30,
    name: 'Virgem',
    price: '10€',
    image: 'https://readdy.ai/api/search-image?query=handmade%20virgin%20mary%20wax%20figurine%2C%20artisan%20religious%20candle%20sculpture%2C%20white%20background%2C%20soft%20tones%2C%20product%20photography&width=400&height=400&seq=prod30&orientation=squarish',
  },
  {
    id: 31,
    name: 'Vela Sagrado Rostro',
    price: '20€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/4b44732fc9a9376f8d4ff28928d02e42.jpeg',
  },
  {
    id: 32,
    name: 'Vela da Virgem de Guadalupe',
    price: '25€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/aeb3d66db08eb4b5a8e738df8d7c659d.jpeg',
  },
  {
    id: 33,
    name: 'Lembrete Memorial da Virgem de Guadalupe com Terço',
    price: '20€ / 15€ a partir de 6 un.',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/ab36434190d4b047d782f65673b61141.jpeg',
  },
  {
    id: 34,
    name: 'Lembretes Personalizados',
    price: 'A partir de 10€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/02287ad8d9ced195c04e64d85046bf62.jpeg',
  },
  {
    id: 35,
    name: 'Coração nas Mãos',
    price: '10€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/ac9c03f7b52166afe95872e80c7ab67f.jpeg',
  },
  {
    id: 36,
    name: 'Patinhas',
    price: '5€ / 3€ atacado',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/df60aa614540fa5b116128ec08774644.jpeg',
  },
  {
    id: 37,
    name: 'Waxmelts (Caixa)',
    price: '10€',
    image: 'https://static.readdy.ai/image/74d0e45231b3fc4ae0501b2bf4ea35dd/55ad74a826804ae1ac8297dfa99a6df9.jpeg',
  },
  {
    id: 38,
    name: 'Difusor a Vela',
    price: '9€',
    image: 'https://readdy.ai/api/search-image?query=candle%20diffuser%20handmade%20artisan%2C%20wax%20candle%20diffuser%2C%20white%20background%2C%20warm%20minimal%20tones%2C%20elegant%20product%20photography&width=400&height=400&seq=prod38&orientation=squarish',
  },
];

export default function Products() {
  return (
    <section id="colecao" className="bg-[#faf7f2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs tracking-[0.3em] text-[#7a8c5e] uppercase font-medium">A Nossa Coleção</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3a2a1e] mt-3 mb-4">Os nossos produtos</h2>
          <p className="text-[#8a7a6a] text-base max-w-xl mx-auto leading-relaxed">
            Cada peça é criada com intenção, cuidado e materiais naturais selecionados. O aroma é à escolha do cliente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden bg-[#f5f0e8]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 md:p-5">
                <h3 className="font-serif text-sm md:text-base text-[#3a2a1e] mb-2 leading-snug flex-1">{product.name}</h3>
                <p className="text-[#7a8c5e] font-medium text-sm md:text-base mb-4">{product.price}</p>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center w-full py-2.5 bg-[#7a8c5e] text-white text-xs font-medium rounded-full hover:bg-[#6a7a50] transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  Encomendar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-[#8a7a6a] text-sm mb-4">Quer saber mais sobre os nossos produtos?</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#7a8c5e] text-sm font-medium border-b border-[#7a8c5e] pb-0.5 hover:gap-3 transition-all duration-200 cursor-pointer"
          >
            Entre em contacto connosco
            <i className="ri-arrow-right-line text-base"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
