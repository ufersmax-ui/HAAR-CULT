import { Scissors, Palette, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Herren Trockenhaarschnitt',
      description: 'Präziser Schnitt von Meisterhand',
      price: 'ab 20€',
    },
    {
      icon: Palette,
      title: 'Damen-Styling & Farbe',
      description: 'Von klassisch bis trendy – Ihr individueller Look',
      price: 'Auf Anfrage',
    },
    {
      icon: Sparkles,
      title: 'Individuelle Beratung',
      description: 'Augenbrauen-Service und persönliche Typberatung',
      price: 'Auf Anfrage',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Unsere Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professionelle Dienstleistungen für Ihr perfektes Styling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#FF6600]"
            >
              <div className="bg-[#FF6600] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-[#FF6600] font-bold text-xl">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
