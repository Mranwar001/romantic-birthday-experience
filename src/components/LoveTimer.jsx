import React, { useState, useEffect } from 'react';

const LoveTimer = ({ startDate }) => {
    const [days, setDays] = useState(0);

    useEffect(() => {
        const calculateDays = () => {
            const start = new Date(startDate);
            const now = new Date();
            const difference = now.getTime() - start.getTime();
            const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(totalDays);
        };

        calculateDays();
        const interval = setInterval(calculateDays, 86400000); // Update every day
        return () => clearInterval(interval);
    }, [startDate]);

    return (
        <div className="love-timer-container glass-effect p-4 text-center soft-shadow animate__animated animate__zoomIn">
            <h3 className="romantic-text glow-text" style={{ fontSize: '2.5rem' }}>
                I've loved you for
            </h3>
            <div className="days-counter my-3">
                <span className="display-1 fw-bold romantic-rose-text">{days}</span>
                <span className="h1 mx-3 romantic-text glow-text">Days</span>
            </div>
            <h3 className="romantic-text glow-text" style={{ fontSize: '2rem' }}>
                and counting ❤️
            </h3>

            <style jsx>{`
        .love-timer-container {
          max-width: 500px;
          margin: 0 auto;
          border: 2px solid rgba(255, 77, 109, 0.3);
        }
        .romantic-rose-text {
          color: #ff4d6d;
          text-shadow: 0 0 15px rgba(255, 77, 109, 0.4);
        }
        .days-counter {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
        </div>
    );
};

export default LoveTimer;
