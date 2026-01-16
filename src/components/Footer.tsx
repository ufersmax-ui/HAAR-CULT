import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-[#FF6600]">
              HAAR-CULT
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ihr Meisterfriseur in Eching. Seit über 20 Jahren stehen wir für
              Qualität, Stil und persönliche Beratung.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#FF6600] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Bahnhofstraße 5</p>
                  <p className="text-gray-300">85386 Eching</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#FF6600] flex-shrink-0" />
                <a
                  href="tel:+4989370687040"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  089 37068704
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#FF6600] flex-shrink-0" />
                <a
                  href="mailto:info@haar-cult.de"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@haar-cult.de
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Folgen Sie uns</h4>
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-[#FF6600] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-[#FF6600] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>

            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.4!2d11.6193!3d48.2986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDE3JzU1LjAiTiAxMcKwMzcnMDkuNSJF!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="HAAR-CULT Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 HAAR-CULT. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Impressum
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
