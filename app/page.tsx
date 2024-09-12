"use client";
import React, { useEffect, useState } from 'react';
import {Header} from '@/components/Header';
import {About} from '@/components/About';
import {Projects} from '@/components/Projects';
import {Contact} from '@/components/Contact';
import { Footer } from '@/components/Footer';


// Define types for gradient position state
interface GradientPosition {
  x: string;
  y: string;
}

const Home: React.FC = () => {
  // State for storing the gradient position
  const [gradientPosition, setGradientPosition] = useState<GradientPosition>({ x: '50%', y: '50%' });

  useEffect(() => {
    // Handler for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = ((clientX / innerWidth) * 100) + '%';
      const y = ((clientY / innerHeight) * 100) + '%';
      setGradientPosition({ x, y });
    };

    // Attach event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300"
                style={{ 
                  background: `radial-gradient(500px at ${gradientPosition.x} ${gradientPosition.y}, rgba(100, 100, 100, 0.3), rgba(87, 87, 87, 0.1), transparent 80%)` 
                }} />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:justify-between lg:w-1/2 lg:flex-col lg:py-24">
            <Header/>
          </header>
          <main className="pt-10 lg:w-1/2 lg:py-24">
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;


