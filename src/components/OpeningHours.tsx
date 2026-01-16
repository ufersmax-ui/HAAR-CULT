import { Clock } from 'lucide-react';

export default function OpeningHours() {
  const hours = [
    { day: 'Montag', time: '13:00 – 19:00' },
    { day: 'Dienstag', time: '09:00 – 19:00' },
    { day: 'Mittwoch', time: '08:00 – 13:00' },
    { day: 'Donnerstag', time: '10:00 – 19:00' },
    { day: 'Freitag', time: '08:00 – 16:00' },
    { day: 'Samstag', time: 'Geschlossen', closed: true },
    { day: 'Sonntag', time: 'Geschlossen', closed: true },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock size={40} className="text-[#FF6600]" />
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900">
              Öffnungszeiten
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Wir sind gerne für Sie da
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <div className="space-y-4">
            {hours.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-4 border-b border-gray-200 last:border-0 ${
                  item.closed ? 'opacity-60' : ''
                }`}
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {item.day}
                </span>
                <span
                  className={`text-lg ${
                    item.closed ? 'text-gray-500' : 'text-[#FF6600] font-medium'
                  }`}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
