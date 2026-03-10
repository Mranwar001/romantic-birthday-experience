import React from 'react';

const Hero = ({ name }) => {
  return (
    <section className="hero-section text-center d-flex flex-column align-items-center justify-content-center">
      <div className="container animate__animated animate__fadeIn">
        <h1 className="hero-title animate__animated animate__zoomIn">
          Happy Birthday <br />
          <span className="name-mask">{name}</span> ❤️
        </h1>
        <p className="hero-subtitle mt-4 animate__animated animate__slideInUp animate__delay-1s dancing-script">
          "You are the most beautiful chapter of my life."
        </p>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          background: transparent;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          bottom: 20px;
          border: 2px solid rgba(255, 77, 109, 0.3);
          border-radius: 30px;
          pointer-events: none;
        }

        .hero-title {
          font-size: 7rem;
          font-weight: 900;
          color: #ffb3c1;
          line-height: 1.1;
          margin-bottom: 0;
          text-shadow: 0 0 20px rgba(255, 77, 109, 0.6);
          font-family: 'Great Vibes', cursive;
        }

        .name-mask {
          background-image: linear-gradient(45deg, #ff4d6d, #ffb3c1, #ff4d6d);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine 3s linear infinite;
          display: inline-block;
        }

        .hero-subtitle {
          font-size: 3rem;
          color: #ffccd5;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          margin-top: 2rem;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 4rem; }
          .hero-subtitle { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
