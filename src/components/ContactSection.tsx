
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-monica-cream">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-3">
            Do you have any Question <br />
            or Project you need help with?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-center text-lg text-gray-600 mb-12">CONTACT US!</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={200} className="lg:col-span-1">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-monica focus:border-monica transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-monica focus:border-monica transition-all duration-200"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-monica focus:border-monica transition-all duration-200"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-monica focus:border-monica transition-all duration-200"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn-monica w-full md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </ScrollReveal>
          
          <ScrollReveal delay={400} className="lg:col-span-1 flex flex-col space-y-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-monica" size={20} />
                  <p>123 Design Avenue, Suite 500<br />New York, NY 10001</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-monica" size={20} />
                  <p>(212) 555-7890</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 text-monica" size={20} />
                  <p>info@monicainteriors.com</p>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] bg-gray-200 rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946229!3d40.69766374934879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1621521369895!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Monica Interiors Location"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
