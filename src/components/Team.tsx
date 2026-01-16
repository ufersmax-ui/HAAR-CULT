import { Award, Users, Heart } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Unser Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Erfahrung trifft auf Leidenschaft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-[#FF6600] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              Meisterqualität
            </h3>
            <p className="text-gray-600">
              Alle unsere Stylisten sind Friseurmeister mit jahrelanger Erfahrung
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#FF6600] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              Persönlich
            </h3>
            <p className="text-gray-600">
              Individuelle Beratung und persönliche Betreuung für jeden Kunden
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#FF6600] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              Mit Leidenschaft
            </h3>
            <p className="text-gray-600">
              Wir lieben was wir tun und das sehen Sie am Ergebnis
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Seit über 20 Jahren ist HAAR-CULT Ihre erste Adresse für professionelle
            Friseurdienstleistungen in Eching. Unser erfahrenes Team steht für höchste
            Qualität, moderne Techniken und individuelle Beratung. Wir nehmen uns Zeit
            für Sie und Ihre Wünsche.
          </p>
        </div>
      </div>
    </section>
  );
}
