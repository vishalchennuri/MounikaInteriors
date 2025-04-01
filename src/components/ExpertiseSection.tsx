
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

const expertiseCards = [
  {
    title: "Residential Design",
    description: "Creating beautiful spaces for everyday living",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "Furniture Selection",
    description: "Curating the perfect pieces for your lifestyle",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Renovation & Styling",
    description: "Transforming existing spaces into something new",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop"
  },
  {
    title: "Kitchen & Bath Design",
    description: "Functional yet stylish spaces for everyday use",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop"
  }
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-3">Our Expertise</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-center text-lg text-gray-600 mb-12">Transforming Spaces, Enhancing Lives</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseCards.map((card, index) => (
            <ScrollReveal 
              key={index} 
              delay={200 + index * 100}
              className="expertise-card h-80"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="expertise-card-content">
                <h3 className="text-white text-xl font-serif mb-2">{card.title}</h3>
                <p className="text-white/90 text-sm">{card.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
