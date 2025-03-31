
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2128&auto=format&fit=crop",
    name: "Monica Espinoza",
    role: "Lead Designer",
    quote: "We inherited old apartment style lamps with our first-century design but made it functional to our lifestyle. They work perfectly with our decor and lighting needs.",
    stars: 5
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    name: "James K. Peterson",
    role: "Client",
    quote: "Working with this team was the best decision we made for our home renovation. Their attention to detail and understanding of our needs created a space that truly feels like us.",
    stars: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-monica-cream">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-4">Voices Of Trust</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-center text-gray-600 mb-12">Don't just take our word for it—here's what our clients say</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={200 + index * 100} className="bg-white p-8 rounded-sm hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              
              <div className="flex">
                {Array(testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
