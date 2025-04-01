
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

const products = [
  {
    name: "Altair Dining Chair",
    price: 599,
    color: "Sage",
    image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?q=80&w=2069&auto=format&fit=crop"
  },
  {
    name: "Blanche Bergere",
    price: 899,
    color: "Blush",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2060&auto=format&fit=crop"
  },
  {
    name: "Porto Dining Chair",
    price: 499,
    color: "Gray",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2053&auto=format&fit=crop"
  }
];

const ShopSection = () => {
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Designed For How You Live</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg text-gray-600 mb-12">Curated pieces that adapt to your rhythms, not the other way around</p>
        </ScrollReveal>
        
        {/* Featured Product */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="lg:col-span-1">
              <div className="overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop"
                  alt="Accent Chair"
                  className="w-full h-auto hover-zoom"
                />
              </div>
            </div>
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h3 className="text-2xl font-serif mb-4">Accent Chair with Character</h3>
              <p className="text-gray-600 mb-6">
                A modern take on the classic lounge chair, featuring gentle curves and sturdy wooden legs. Perfect for reading corners or as a statement piece in any room.
              </p>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full bg-monica-sage mr-2"></div>
                <span className="text-gray-800">Sage Green</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium">$799</span>
                <button className="btn-outline-monica">View Details</button>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Product Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={index} delay={300 + index * 100} className="group">
              <div className="overflow-hidden rounded-sm mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif">{product.name}</h3>
              <div className="flex justify-between mt-2">
                <span className="text-gray-600">{product.color}</span>
                <span className="font-medium">${product.price}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
