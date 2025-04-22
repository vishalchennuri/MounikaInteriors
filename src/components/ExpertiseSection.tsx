import React from 'react';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

const expertiseCards = [
  {
    title: "Hidden Furniture (Cupboards)",
    description: "Seamlessly designed storage solutions that blend into your interiors",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "Painting and Polishing",
    description: "Premium finishes that breathe new life into your walls and woodwork",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "False Ceiling",
    description: "Modern ceiling designs that elevate your space with style and lighting",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop"
  },
  {
    title: "Modular Kitchen Installation",
    description: "Efficient and elegant kitchen setups tailored to your lifestyle",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Luxury, High-End Interior Styling",
    description: "Sophisticated aesthetics and premium materials for a lavish living experience",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "Art and Decor (Your Customization)",
    description: "Unique decorative elements that reflect your personal style",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "False Ceiling",
    description: "Modern ceiling designs that elevate your space with style and lighting",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop"
  }
];

// Duplicate cards for seamless infinite scrolling
const tickerCards = [...expertiseCards, ...expertiseCards];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-3">Our Expertise</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-center text-lg text-gray-600 mb-12">Transforming Spaces, Enhancing Lives</p>
        </ScrollReveal>

        <div className="relative w-full overflow-hidden group">
          <div className="flex w-max animate-marquee gap-6">
            {tickerCards.map((card, index) => (
              <div
              key={index}
              className="min-w-[300px] max-w-[300px] h-80 relative overflow-hidden rounded-xl shadow-md transform transition-transform duration-500 hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 p-4 flex flex-col justify-end">
                <h3 className="text-white text-xl font-serif mb-2">{card.title}</h3>
                <p className="text-white/90 text-sm">{card.description}</p>
              </div>
            </div>
            
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;
