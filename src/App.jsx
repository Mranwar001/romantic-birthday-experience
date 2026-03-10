import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import MessageCarousel from './components/MessageCarousel';
import Gallery from './components/Gallery';
import Fireworks from './components/Fireworks';
import MusicPlayer from './components/MusicPlayer';
import LoveTimer from './components/LoveTimer';
import SurpriseModal from './components/SurpriseModal';
import LoveLetter from './components/LoveLetter';

const App = () => {
  const [showHearts, setShowHearts] = useState([]);
  const [showPetals, setShowPetals] = useState([]);

  useEffect(() => {
    // Generate floating hearts background
    const hearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      size: `${Math.random() * 20 + 10}px`,
      duration: `${Math.random() * 5 + 8}s`
    }));
    setShowHearts(hearts);

    // Generate floating rose petals
    const petals = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      size: `${Math.random() * 15 + 10}px`,
      duration: `${Math.random() * 7 + 10}s`,
      rotation: `${Math.random() * 360}deg`
    }));
    setShowPetals(petals);
  }, []);

  return (
    <div className="app-container">
      {/* Background Hearts & Petals */}
      {showHearts.map(heart => (
        <div
          key={`heart-${heart.id}`}
          className="floating-heart fa-solid fa-heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size
          }}
        />
      ))}
      {showPetals.map(petal => (
        <div
          key={`petal-${petal.id}`}
          className="floating-petal fa-solid fa-leaf"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            fontSize: petal.size,
            transform: `rotate(${petal.rotation})`
          }}
        />
      ))}

      <Hero name="Girlfriend" />

      <section className="container">
        <LoveTimer startDate="2023-01-01" />
      </section>

      <MessageCarousel />

      <Gallery />

      <LoveLetter />

      <section className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center glass-effect p-5 mb-5 animate__animated animate__fadeIn">
            <h2 className="display-4 romantic-text glow-text mb-4">A Note for You</h2>
            <p className="lead dancing-script" style={{ fontSize: '1.5rem' }}>
              "In the garden of my life, you are the most beautiful rose. Every day with you feels like a melody
              that never ends. Happy birthday, my love."
            </p>
          </div>
        </div>
      </section>

      <Fireworks />

      <MusicPlayer />

      <SurpriseModal delay={10000} />

      <footer className="text-center py-4 glass-effect mt-5">
        <p className="romantic-text" style={{ fontSize: '1.2rem' }}>Made with ❤️ Forever Yours</p>
      </footer>
    </div>
  );
};

export default App;
