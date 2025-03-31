
import React from 'react';
import ScrollReveal from './ScrollReveal';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop")',
      }}
    >
      <div className="container mx-auto px-4 lg:px-20">
        <ScrollReveal>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight text-shadow">
            WHERE ELEGANCE <br />
            <span className="italic font-light">MEETS</span> INTENTION
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-white text-lg md:text-xl max-w-xl mb-8 text-shadow">
            Transforming spaces to reflect your distinct style and personality. Creating homes that tell your story.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <a
            href="#contact"
            className="btn-monica inline-block"
          >
            Schedule a Consultation
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
