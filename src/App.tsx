import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import Services from './components/Services';
import Team from './components/Team';
import BookingModal from './components/BookingModal';
import Testimonials from './components/Testimonials';
import OpeningHours from './components/OpeningHours';
import Footer from './components/Footer';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onBookingClick={() => setIsBookingModalOpen(true)} />
      <Hero />
      <InfoBar />
      <Services />
      <Team />
      <Testimonials />
      <OpeningHours />
      <Footer />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

export default App;
