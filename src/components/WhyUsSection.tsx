
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Check } from 'lucide-react';

const reasons = [
  "We blend creativity with practicality, ensuring spaces are both beautiful and functional",
  "Our team brings diverse perspectives to each project, resulting in truly unique designs",
  "We maintain transparent communication throughout the entire design process",
  "Our network of trusted craftspeople and vendors ensures quality execution",
  "We prioritize sustainable and ethical sourcing for materials and furnishings"
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-mounika">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-white text-3xl md:text-4xl font-serif mb-3">Why Choose Us?</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-white/80 text-lg mb-12">What sets Mounika Interiors apart from the rest</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={200} className="lg:col-span-1">
            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 mt-1 bg-white/20 p-1 rounded-full">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-white/90">{reason}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          
          <ScrollReveal delay={400} className="lg:col-span-1">
            <div className="relative h-[400px] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop"
                alt="Interior Design Process"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
