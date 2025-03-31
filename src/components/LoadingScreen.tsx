
import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    // Simulate page loading completion
    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 2500);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-monica z-[100] flex flex-col items-center justify-center">
      <h2 className="text-white text-3xl mb-8 font-serif">
        MONICA<br />INTERIORS
      </h2>
      <div className="w-64 h-1 bg-white/20 relative">
        <div 
          className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
