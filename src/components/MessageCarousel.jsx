import React, { useState, useEffect } from 'react';

const messages = [
    { text: "Every moment with you is my favorite memory ❤️", animation: "animate__fadeIn" },
    { text: "You make my world brighter just by being in it 🌟", animation: "animate__slideInUp" },
    { text: "I'm the luckiest person to have you by my side 💖", animation: "animate__zoomIn" },
    { text: "Your smile is my favorite sight in the entire world 😍", animation: "animate__heartBeat" },
    { text: "Forever isn't long enough when I'm with you 💞", animation: "animate__fadeIn" }
];

const MessageCarousel = () => {
    const [index, setIndex] = useState(0);
    const [key, setKey] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setKey(prev => prev + 1); // Reset animation
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="carousel-section py-5 overflow-hidden">
            <div className="container">
                <div className="glass-effect p-5 text-center min-vh-50 d-flex align-items-center justify-content-center">
                    <div key={key} className={`animate__animated ${messages[index].animation}`}>
                        <h2 className="display-4 romantic-text glow-text message-text">
                            {messages[index].text}
                        </h2>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .carousel-section {
          min-height: 60vh;
          display: flex;
          align-items: center;
        }
        .message-text {
          font-size: 3.5rem;
          color: #ff4d6d;
          padding: 20px;
        }
        @media (max-width: 768px) {
          .message-text { font-size: 2rem; }
        }
      `}</style>
        </section>
    );
};

export default MessageCarousel;
