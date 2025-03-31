
import React from 'react';
import ScrollReveal from './ScrollReveal';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-monica-cream">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Our Signature Projects</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg text-gray-600 mb-12">Where elegance meets perfection</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal delay={200} className="lg:col-span-1">
            <div className="prose max-w-none">
              <p className="mb-4">
                At Monica Interiors, we pride ourselves on delivering exceptional spaces that reflect the unique personalities and lifestyles of our clients. Our projects range from complete home renovations to specific room transformations.
              </p>
              <p className="mb-4">
                We believe in the power of thoughtful design to transform not just spaces, but lives. Our signature approach combines timeless elegance with functional solutions tailored to each client's specific needs and desires.
              </p>
              <p>
                Each project begins with a deep understanding of how you live, work, and entertain, ensuring that the final design enhances your daily experience and brings joy to everyday moments.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400} className="lg:col-span-1">
            <div className="relative h-[400px] overflow-hidden hover-zoom">
              <img
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1974&auto=format&fit=crop"
                alt="Signature Project"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
