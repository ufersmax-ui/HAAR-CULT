import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Vorzügliche individuelle Beratung und super Service. Farbe und Glanz auf meisterliche Art!',
      author: 'Sabine H.',
      rating: 5,
    },
    {
      text: 'Seit Jahren mein Stammfriseur. Preise angemessen, Ergebnisse top.',
      author: 'Max',
      rating: 5,
    },
    {
      text: 'Super Beratung via Foto-Vorlage, Haare perfekt geschnitten.',
      author: 'Zufriedener Kunde',
      rating: 5,
    },
  ];

  return (
    <section id="bewertungen" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Überzeugen Sie sich von unserer Qualität
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <Quote size={40} className="text-[#FF6600] opacity-50" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[#FF6600] text-[#FF6600]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="text-gray-900 font-semibold">
                – {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
