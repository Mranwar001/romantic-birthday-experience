import React, { useEffect, useRef } from 'react';

const Fireworks = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.velocity = {
                    x: (Math.random() - 0.5) * 8,
                    y: (Math.random() - 0.5) * 8
                };
                this.alpha = 1;
                this.friction = 0.95;
            }

            draw() {
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                this.velocity.x *= this.friction;
                this.velocity.y *= this.friction;
                this.x += this.velocity.x;
                this.y += this.velocity.y;
                this.alpha -= 0.01;
            }
        }

        let particles = [];

        const createFirework = (x, y) => {
            const colors = ['#ff4d6d', '#ff85a2', '#c9184a', '#bb96ff', '#ffffff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            for (let i = 0; i < 40; i++) {
                particles.push(new Particle(x, y, color));
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(255, 240, 243, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles = particles.filter(p => p.alpha > 0);
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            if (Math.random() < 0.03) {
                createFirework(Math.random() * canvas.width, Math.random() * canvas.height * 0.5);
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="fireworks-section position-relative overflow-hidden">
            <canvas ref={canvasRef} className="fireworks-canvas" />
            <div className="fireworks-overlay d-flex align-items-center justify-content-center">
                <h2 className="display-3 romantic-text glow-text text-center animate__animated animate__pulse animate__infinite">
                    Forever With You ❤️
                </h2>
            </div>

            <style jsx>{`
        .fireworks-section {
          height: 100vh;
        }
        .fireworks-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .fireworks-overlay {
          position: relative;
          z-index: 2;
          height: 100%;
          pointer-events: none;
        }
      `}</style>
        </section>
    );
};

export default Fireworks;
