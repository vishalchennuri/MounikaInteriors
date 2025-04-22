import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContactButtons: React.FC = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:9885185978';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello I am here for the interior services provided by mounika interiors');
    window.location.href = `https://wa.me/919885185978?text=${message}`;
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
      <button
        onClick={handlePhoneClick}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone size={24} />
      </button>
    </div>
  );
};

export default FloatingContactButtons;