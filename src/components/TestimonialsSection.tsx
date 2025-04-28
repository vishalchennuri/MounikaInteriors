import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2128&auto=format&fit=crop",
    name: "Priya Reddy",
    role: "Interior Designer – Banjara Hills",
    quote:
      "Our Jubilee Hills apartment had an old-school layout, but the team blended it with modern functionality without losing the Hyderabadi charm. Loved how it turned out!",
    stars: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    name: "Shaik Imran",
    role: "Client – Gachibowli",
    quote:
      "From the very first discussion, they understood our vision. The final result reflects our culture and lifestyle — a beautiful fusion of tradition and modern design.",
    stars: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    name: "Ananya Kumar",
    role: "Client – Hitech City",
    quote:
      "The team listened to our needs and transformed our space into something truly special. Their attention to detail and commitment to quality is unmatched in Hyderabad.",
    stars: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    name: "Rahul Verma",
    role: "Client – Kukatpally",
    quote:
      "Working with Mounika Interiors was the best decision we made for our home renovation. They delivered exactly what we wanted and more, all within our budget.",
    stars: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    name: "Sameera Patel",
    role: "Architect – Madhapur",
    quote:
      "As an architect, I have high standards for interior design. The team exceeded my expectations with their creative solutions and professional approach.",
    stars: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    name: "Vikram Singh",
    role: "Client – Begumpet",
    quote:
      "The transformation of our office space was remarkable. Everyone who visits is impressed by the aesthetics and functionality that Mounika Interiors brought to our workplace.",
    stars: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034&auto=format&fit=crop",
    name: "Lakshmi Narayan",
    role: "Client – Kondapur",
    quote:
      "From concept to completion, the team was communicative and professional. Our home now perfectly reflects our personality while maximizing space and comfort.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Create a modified array that duplicates items to create an infinite scroll effect
  const getDisplayItems = () => {
    // We duplicate the entire testimonials array to create the infinite effect
    return [...testimonials, ...testimonials];
  };

  const displayItems = getDisplayItems();

  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const itemsPerView = isMobile ? 1 : 3;
    const totalOriginalItems = testimonials.length;

    let nextIndex = currentIndex + 1;

    // Reset to beginning (without animation jump) when we've gone through all original items
    if (nextIndex >= totalOriginalItems) {
      // Continue incrementing normally - the duplicated items will create the infinite effect
      setCurrentIndex(nextIndex);

      // But once we're done with the transition, secretly reset back to the beginning
      setTimeout(() => {
        setCurrentIndex(nextIndex % totalOriginalItems);
      }, 500);
    } else {
      setCurrentIndex(nextIndex);
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const totalOriginalItems = testimonials.length;

    if (currentIndex <= 0) {
      // Reset to end for previous from first position
      setCurrentIndex(totalOriginalItems - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-10 bg-monica-cream">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-4">
            Voices Of Trust
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-center text-gray-600 mb-12">
            Don't just take our word for it—here's what our clients say
          </p>
        </ScrollReveal>

        <div className="relative overflow-hidden px-4 md:px-12">
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / (isMobile ? 1 : 3))
                }%)`,
              }}
            >
              {displayItems.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`${
                    isMobile ? "w-full flex-shrink-0" : "w-1/3 flex-shrink-0"
                  } px-3`}
                >
                  <div className="bg-white p-6 md:p-8 rounded-sm shadow-md hover-lift h-96">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg md:text-xl">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="overflow-y-auto h-52">
                      <p className="text-gray-700 italic text-sm md:text-base">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <div className="flex mt-6">
                      {Array(testimonial.stars)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#FFD700"
                            color="#FFD700"
                          />
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation buttons (sides) */}
          <div className="md:hidden flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-2">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Desktop navigation buttons (bottom) - Now hidden on mobile */}
          <div className="hidden md:flex justify-center mt-10 space-x-6">
            <button
              onClick={prevSlide}
              className="bg-white p-4 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-4 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;