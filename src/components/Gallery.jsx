import React from 'react';

const images = [
    "https://images.unsplash.com/photo-1518199266791-c399a95d7bab?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494972308805-463bc619d34e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-164883eecd0c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581022295087-35e5937c4a99?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516589174184-c6858b13cefb?q=80&w=1000&auto=format&fit=crop"
];

const Gallery = () => {
    return (
        <section className="gallery-section py-5">
            <div className="container">
                <h2 className="text-center display-4 romantic-text glow-text mb-5 animate__animated animate__fadeIn">
                    Our Precious Moments
                </h2>
                <div className="row g-4 justify-content-center">
                    {images.map((url, i) => (
                        <div key={i} className="col-lg-4 col-md-6 animate__animated animate__fadeInUp" style={{ animationDelay: `${i * 0.2}s` }}>
                            <div className="gallery-card glass-effect overflow-hidden soft-shadow">
                                <img src={url} alt={`Moment ${i + 1}`} className="img-fluid gallery-img" />
                                <div className="gallery-overlay d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-heart fa-3x text-white glow-text"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .gallery-card {
          position: relative;
          cursor: pointer;
          border-radius: 20px;
          transition: transform 0.5s ease;
        }
        .gallery-card:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(255, 77, 109, 0.3);
        }
        .gallery-img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        .gallery-card:hover .gallery-img {
          transform: scale(1.1);
        }
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 77, 109, 0.4);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }
      `}</style>
        </section>
    );
};

export default Gallery;
