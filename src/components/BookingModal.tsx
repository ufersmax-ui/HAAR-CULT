import { X, Calendar, Clock, User, Phone, Check } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const services = [
    'Herren Trockenhaarschnitt',
    'Damen-Styling & Farbe',
    'Individuelle Beratung',
    'Augenbrauen-Service',
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  const generateNextDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push({
          date: date.toISOString().split('T')[0],
          displayDate: date.toLocaleDateString('de-DE', {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
          }),
        });
      }
    }
    return days;
  };

  const availableDays = generateNextDays();

  const handleSubmit = async () => {
    if (!name || !phone || !selectedService || !selectedDate || !selectedTime) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('bookings').insert([
        {
          name,
          phone,
          service: selectedService,
          booking_date: selectedDate,
          booking_time: selectedTime,
        },
      ]);

      if (error) throw error;

      setShowConfirmation(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Booking error:', error);
      alert('Es gab einen Fehler bei der Buchung. Bitte rufen Sie uns an.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setName('');
    setPhone('');
    setShowConfirmation(false);
    onClose();
  };

  if (!isOpen) return null;

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center animate-scale-in">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-600" />
          </div>
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Vielen Dank!
          </h3>
          <p className="text-lg text-gray-600">
            Ihre Terminanfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900">
            Termin buchen
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full mx-1 ${
                  s <= step ? 'bg-[#FF6600]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {step === 1 && (
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Scissors className="text-[#FF6600]" size={24} />
                Service wählen
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => {
                      setSelectedService(service);
                      setStep(2);
                    }}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      selectedService === service
                        ? 'border-[#FF6600] bg-orange-50'
                        : 'border-gray-200 hover:border-[#FF6600]'
                    }`}
                  >
                    <span className="font-semibold text-gray-900">{service}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="text-[#FF6600]" size={24} />
                Datum wählen
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-96 overflow-y-auto">
                {availableDays.map((day) => (
                  <button
                    key={day.date}
                    onClick={() => {
                      setSelectedDate(day.date);
                      setStep(3);
                    }}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedDate === day.date
                        ? 'border-[#FF6600] bg-orange-50'
                        : 'border-gray-200 hover:border-[#FF6600]'
                    }`}
                  >
                    <span className="font-semibold text-gray-900 text-sm">
                      {day.displayDate}
                    </span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                className="mt-6 text-gray-600 hover:text-gray-900 font-medium"
              >
                ← Zurück
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="text-[#FF6600]" size={24} />
                Uhrzeit wählen
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-h-96 overflow-y-auto">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => {
                      setSelectedTime(time);
                      setStep(4);
                    }}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selectedTime === time
                        ? 'border-[#FF6600] bg-orange-50'
                        : 'border-gray-200 hover:border-[#FF6600]'
                    }`}
                  >
                    <span className="font-semibold text-gray-900 text-sm">{time}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-6 text-gray-600 hover:text-gray-900 font-medium"
              >
                ← Zurück
              </button>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User className="text-[#FF6600]" size={24} />
                Ihre Kontaktdaten
              </h3>

              <div className="bg-gray-50 p-4 rounded-xl mb-6">
                <p className="text-sm text-gray-600 mb-1">Ihre Auswahl:</p>
                <p className="font-semibold text-gray-900">{selectedService}</p>
                <p className="text-gray-700">
                  {new Date(selectedDate).toLocaleDateString('de-DE', {
                    weekday: 'long',
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}{' '}
                  um {selectedTime} Uhr
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF6600] focus:outline-none"
                    placeholder="Ihr vollständiger Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF6600] focus:outline-none"
                    placeholder="0123 456789"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Zurück
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !name || !phone}
                  className="flex-1 px-6 py-3 rounded-xl bg-[#FF6600] text-white font-medium hover:bg-[#E55A00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Termin anfragen'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
