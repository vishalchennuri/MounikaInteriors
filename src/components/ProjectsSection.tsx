import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const carouselRef = useRef(null);
  const slideContainerRef = useRef(null);
  
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null); // 'horizontal' or 'vertical'
  
  const projects = [
    {
      type: 'video',
      media: 'https://res.cloudinary.com/djyny0qqn/video/upload/v1745303618/WhatsApp_Video_2025-04-21_at_23.31.44_660bcf1a_hsesjr.mp4',
      title: 'Storage Solutions at Nile Valley',
      location: 'Miyapur, Hyderabad',
      description: 'In this recently completed project at Nile Valley, Miyapur, we transformed storage into a seamless part of the interior design. From built-in cupboards to fully concealed storage systems, every element was crafted to blend perfectly with the space—delivering smart, stylish functionality without compromising on aesthetics.',
      testimonial: '"The hidden cupboards were a game changer—perfectly fitted and beautifully done. You\'d never guess there\'s storage behind those panels! Clean finish, flawless integration."',
      partner: 'Selman\'s',
      features: [
        'Custom built-in wardrobes and cabinets',
        'Hidden storage solutions',
        'Premium-quality materials',
        'Seamless integration with existing architecture'
      ]
    },
    {
      type: 'image',
      media: 'https://res.cloudinary.com/djyny0qqn/image/upload/v1745303843/WhatsApp_Image_2025-04-22_at_11.42.05_fc203c00_e5rf4k.jpg',
      title: 'Modular Kitchen Design',
      location: 'Chandhanagar, Hyderabad',
      description: 'We recently completed a transformative modular kitchen project in Chandhanagar that perfectly embodies our belief that kitchens should be as beautiful as they are functional. For our client Ramesh, we crafted a modular kitchen design that seamlessly blends with the existing interior style of his home.',
      testimonial: '"My kitchen is now the heart of our home in a way it never was before. The functionality is perfect for how we cook and entertain, and the design is simply stunning. Monica\'s team thought of everything."',
      features: [
        'Smart storage solutions',
        'High-end finishes with carefully selected materials',
        'Integrated appliances and strategic lighting',
        'Ergonomic design principles'
      ]
    },
    {
      type: 'image',
      media: 'https://res.cloudinary.com/djyny0qqn/image/upload/v1745303639/WhatsApp_Image_2025-04-22_at_11.14.20_294c2409_zepfyy.jpg',
      title: 'Interior Transformation',
      location: 'BHEL, Hyderabad',
      description: 'We recently completed a stunning interior transformation at BHEL Place that exemplifies our philosophy: interiors that don\'t just look beautiful—they feel intentional. This project perfectly blended comfort, function, and aesthetic sophistication through discreet storage solutions and artistic flourishes.',
      testimonial: '"What Monica Interiors achieved was beyond our expectations. They didn\'t just redesign our space—they transformed how we live in it. Every detail feels thoughtful and purposeful."',
      services: [
        'Luxar — High-End Interior Styling',
        'Art & Decor — Custom Interior Narrative'
      ]
    },
    {
      type: 'image',
      media: 'https://res.cloudinary.com/djyny0qqn/image/upload/v1745303737/WhatsApp_Image_2025-04-22_at_12.05.30_5c193e0a_c1cwhv.jpg',
      title: 'Personalized Interior Design',
      location: 'Nile Valley Block 7, Miyapur, Hyderabad',
      description: 'We recently completed a stunning interior transformation at Nile Valley Block 7 that exemplifies our personalized approach to design. The space now beautifully reflects our client\'s unique personality and lifestyle through our deeply personalized Art & Decor service.',
      testimonial: '"Working with Monica Interiors was a revelation. They listened intently to understand my personal style, then enhanced it in ways I couldn\'t have imagined. My home now feels authentically mine, but elevated."',
      features: [
        'Custom wall art & installations',
        'Decorative objects & statement pieces',
        'Tailored color palette & material finishes',
        'Textile styling with premium elements',
        'Gallery walls & curated displays'
      ]
    },
   
    {
      type: 'image',
      media: 'https://res.cloudinary.com/djyny0qqn/image/upload/v1745303913/WhatsApp_Image_2025-04-22_at_11.55.52_554dd822_oo5ox7.jpg',
      title: 'False Ceiling Installation',
      location: 'Miyapur Madinaguda, Hyderabad',
      description: 'We recently completed a stunning false ceiling installation at Saadir Shan\'s residence in Miyapur Madinaguda that transformed ordinary spaces into extraordinary ones. For this project, we elevated the often-overlooked ceiling into a defining architectural feature.',
      testimonial: '"I never knew ceiling design could make such a dramatic difference. The lighting integration and layered design completely transformed our living areas. Guests always look up in awe when they visit now."',
      features: [
        'Cove Lighting & LED Accents',
        'Layered & Floating Designs',
        'Mixed Material Approach',
        'Integrated Smart Lighting & Fixtures'
      ]
    },
    {
      type: 'image',
      media: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1974&auto=format&fit=crop',
      title: 'Your Vision, Our Expertise',
      location: 'Can be your home?!',
      description: 'Customization is at the heart of what we do. This showcase project demonstrates our ability to transform any space into a personalized sanctuary that speaks to your unique taste and lifestyle. We believe your home should be as distinctive as you are—a perfect reflection of your personality, preferences, and the way you live.',
      testimonial: '"Monica Interiors didn\'t just design my home—they captured my essence in it. Every room feels like a perfect extension of myself. The customization process was collaborative and exciting from start to finish."',
      features: [
        'Completely bespoke furniture designs tailored to your exact specifications',
        'Personalized color consultations to create your perfect palette',
        'Custom architectural elements that make your space one-of-a-kind',
        'Handcrafted accent pieces selected or commissioned specifically for you',
        'Lifestyle-focused layout planning that optimizes how you use your space daily',
        'Integration of meaningful personal items into a cohesive design story'
      ]
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setActiveProject(index);
  };

  // Enhanced touch handling for better swipe detection
  const handleTouchStart = (e) => {
    setTouchStart({ 
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY 
    });
    setIsDragging(true);
    setSwipeDirection(null);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.targetTouches[0].clientX;
    const currentY = e.targetTouches[0].clientY;
    
    setTouchEnd({ 
      x: currentX,
      y: currentY 
    });
    
    // Determine swipe direction if not already set
    if (!swipeDirection) {
      const deltaX = Math.abs(currentX - touchStart.x);
      const deltaY = Math.abs(currentY - touchStart.y);
      
      // If movement is more horizontal than vertical and beyond a threshold
      if (deltaX > deltaY && deltaX > 10) {
        setSwipeDirection('horizontal');
        e.preventDefault(); // Prevent default only for horizontal swipes
      } else if (deltaY > deltaX && deltaY > 10) {
        setSwipeDirection('vertical');
      }
    } else if (swipeDirection === 'horizontal') {
      e.preventDefault(); // Continue preventing default for established horizontal swipes
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Only process horizontal swipes
    if (swipeDirection === 'horizontal') {
      // Minimum swipe distance to trigger navigation
      const minSwipeDistance = 50;
      
      const distance = touchStart.x - touchEnd.x;
      
      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
          // Swiped left - next project
          nextProject();
        } else {
          // Swiped right - previous project
          prevProject();
        }
      }
    }
    
    // Reset values
    setTouchStart({ x: 0, y: 0 });
    setTouchEnd({ x: 0, y: 0 });
    setSwipeDirection(null);
  };

  // Cancel dragging state if touch is cancelled
  const handleTouchCancel = () => {
    setIsDragging(false);
    setTouchStart({ x: 0, y: 0 });
    setTouchEnd({ x: 0, y: 0 });
    setSwipeDirection(null);
  };

  return (
    <section id="projects" className="py-20 bg-monica-cream">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Our Signature Projects</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg text-gray-600 mb-12">Where elegance meets perfection</p>
        </ScrollReveal>
        
        <div className="relative overflow-hidden">
          {/* Project Display */}
          <div 
            ref={slideContainerRef}
            className="touch-pan-y relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            <div 
              ref={carouselRef}
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeProject * 100}%)` }}
            >
              <div className="flex">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="min-w-full"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="lg:col-span-1 order-2 lg:order-1">
                        <div className="prose max-w-none">
                          <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                          <p className="text-gray-500 mb-4">{project.location}</p>
                          <p className="mb-4">{project.description}</p>
                          
                          {project.testimonial && (
                            <blockquote className="italic border-l-4 pl-4 border-gray-300 my-4">
                              {project.testimonial}
                            </blockquote>
                          )}
                          
                          {project.partner && (
                            <p className="text-sm">In partnership with <span className="font-medium">{project.partner}</span></p>
                          )}
                          
                          {project.services && (
                            <div className="mt-4">
                              <h4 className="font-medium mb-2">Services Implemented:</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {project.services.map((service, idx) => (
                                  <li key={idx}>{service}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {project.features && (
                            <div className="mt-4">
                              <h4 className="font-medium mb-2">Features:</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {project.features.map((feature, idx) => (
                                  <li key={idx}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="lg:col-span-1 order-1 lg:order-2 mb-6 lg:mb-0">
                        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
                          {project.type === 'video' ? (
                            <video 
                              src={project.media} 
                              className="w-full h-full object-cover"
                              autoPlay
                              muted
                              loop
                              playsInline
                              controls={true}
                              controlsList="nodownload"
                              onVolumeChange={(e) => {
                                // Keep video permanently muted regardless of user action
                                const video = e.target as HTMLVideoElement;
                                video.muted = true;
                              }}
                            />
                          ) : (
                            <img
                              src={project.media}
                              alt={project.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}              </div>
            </div>
          </div>
          
          {/* Navigation Controls - With reduced space on mobile */}
          <div className="mt-4 md:mt-8 flex justify-center items-center gap-4">
            <button 
              onClick={prevProject}
              className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-md transition-all focus:outline-none"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    activeProject === index ? 'bg-gray-800 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextProject}
              className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-md transition-all focus:outline-none"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          
          {/* Swipe indicator for mobile */}
          <div className="mt-2 text-center text-gray-400 text-xs md:hidden">
            <span>← Swipe to navigate →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;