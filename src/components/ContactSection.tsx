import React from "react";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    Service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, Service, message } = formData;
    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0ASubject: ${Service}%0AMessage: ${message}`;

    window.open(`https://wa.me/919885185978?text=${whatsappMessage}`, "_blank");
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-monica focus:border-monica transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-monica focus:border-monica transition-all duration-200"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service
                </label>
                <input
                  type="text"
                  id="Service"
                  value={formData.Service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-monica focus:border-monica transition-all duration-200"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-monica focus:border-monica transition-all duration-200"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </ScrollReveal>

          <ScrollReveal
            delay={400}
            className="lg:col-span-1 flex flex-col space-y-8"
          >
            <div>
              <h3 className="text-xl font-serif mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-monica" size={20} />
                  <p>
                    Chandanagar
                    <br />
                    Hyderabad, India
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-monica" size={20} />
                  <p>+91 9885185978 ,</p>
                  <p> +91 7730085978</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 text-monica" size={20} />
                  <p>mounikainteriors5978@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Google Maps iframe */}
            <div className="mt-6">
              <h3 className="text-xl font-serif mb-4">Find Us</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3804.9829507753893!2d78.33380487516771!3d17.508327283399645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMwJzMwLjAiTiA3OMKwMjAnMTEuMCJF!5e0!3m2!1sen!2sin!4v1745462474077!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;