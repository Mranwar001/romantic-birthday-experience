import React from 'react';

const LoveLetter = () => {
    return (
        <section className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="love-letter-envelope animate__animated animate__fadeInUp">
                        <div className="love-letter-paper p-5 glass-effect">
                            <h2 className="romantic-text text-center glow-text mb-4">My Dearest Love</h2>
                            <div className="dancing-script text-white" style={{ fontSize: '1.4rem', lineHeight: '2' }}>
                                <p>On this beautiful day, as the world celebrates the moment you were born, I find myself thinking about how much you mean to me.</p>
                                <p>You are the melody that my heart dances to, the light that guides me through the darkest nights, and the dream I never want to wake up from.</p>
                                <p>Every smile of yours is a treasure, every laugh a song, and every moment with you is a gift I cherish more than words can say.</p>
                                <p className="text-end mt-4">— Forever Yours ❤️</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .love-letter-envelope {
                    perspective: 1000px;
                    margin-bottom: 50px;
                }
                .love-letter-paper {
                    background: rgba(26, 10, 10, 0.8);
                    border: 2px solid #ff4d6d;
                    box-shadow: 0 15px 45px rgba(255, 77, 109, 0.4);
                    transform: rotateX(5deg);
                    transition: transform 0.5s ease;
                }
                .love-letter-paper:hover {
                    transform: rotateX(0deg) scale(1.02);
                }
            `}</style>
        </section>
    );
};

export default LoveLetter;
