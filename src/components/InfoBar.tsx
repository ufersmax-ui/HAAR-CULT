import { MapPin, Phone, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function InfoBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      const schedule: Record<number, { start: number; end: number } | null> = {
        0: null,
        1: { start: 13 * 60, end: 19 * 60 },
        2: { start: 9 * 60, end: 19 * 60 },
        3: { start: 8 * 60, end: 13 * 60 },
        4: { start: 10 * 60, end: 19 * 60 },
        5: { start: 8 * 60, end: 16 * 60 },
        6: null,
      };

      const todaySchedule = schedule[day];
      if (todaySchedule && currentTime >= todaySchedule.start && currentTime < todaySchedule.end) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FF6600] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-3">
            <MapPin size={24} className="flex-shrink-0" />
            <span className="text-sm sm:text-base">Bahnhofstraße 5, 85386 Eching</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={24} className="flex-shrink-0" />
            <a href="tel:+4989370687040" className="text-sm sm:text-base hover:underline">
              089 37068704
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={24} className="flex-shrink-0" />
            <span className="text-sm sm:text-base font-semibold">
              {isOpen ? 'Jetzt geöffnet' : 'Geschlossen'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
