
import React from 'react';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Why Thoughtful Design Matters</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg text-gray-600 mb-12">Our philosophy of creating spaces that nurture and inspire</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollReveal delay={200} className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="mb-4">
                At Monica Interiors, we believe that design is more than just aesthetics; it's about creating spaces that support and enhance your daily life. Our founder, Monica Hudson, combines her architectural training with her understanding of human psychology to design environments that are not only beautiful but deeply functional.
              </p>
              <p className="mb-4">
                Each project begins with an in-depth exploration of how you live, work, and entertain. We consider the flow of your daily routines, your personal style preferences, and the unique architectural features of your space to create designs that feel both fresh and familiar.
              </p>
              <p>
                Our commitment to sustainability and authenticity guides every decision, from material selection to furniture placement. We believe good design should last, both in durability and style, creating spaces that grow and evolve with you over time.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400} className="lg:col-span-1">
            <div className="relative h-full overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1974&auto=format&fit=crop"
                alt="Thoughtful Design Process"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
