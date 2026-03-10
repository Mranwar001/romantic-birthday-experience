import React, { useState, useEffect } from 'react';

const SurpriseModal = ({ delay = 10000 }) => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1); // 1: Question, 2: Choice, 3: Message, 4: Success
  const [choice, setChoice] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleChoice = (selected) => {
    setChoice(selected);
    setStep(3);
  };

  const handleSend = () => {
    const subject = encodeURIComponent("A Special Birthday Message for You! ❤️");
    const body = encodeURIComponent(`Choice: ${choice}\n\nMessage: ${message}`);
    window.location.href = `mailto:anwarcscience@gmail.com?subject=${subject}&body=${body}`;
    setStep(4);
  };

  if (!show) return null;

  return (
    <div className="modal-backdrop-custom d-flex align-items-center justify-content-center p-3">
      <div className="surprise-modal glass-effect p-4 p-md-5 text-center animate__animated animate__zoomIn animate__faster soft-shadow">
        {step === 1 && (
          <>
            <h2 className="romantic-text glow-text display-4 mb-4">A Special Question ❤️</h2>
            <p className="lead mb-5 dancing-script" style={{ fontSize: '1.8rem' }}>
              "Will you always be mine? ❤️"
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <button onClick={() => setStep(2)} className="btn-romantic btn-pink animate__animated animate__pulse animate__infinite">
                Yes 💖
              </button>
              <button onClick={() => setStep(2)} className="btn-romantic btn-forever">
                Forever 💞
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="romantic-text glow-text display-5 mb-4">Pick Our Next Adventure ✈️</h2>
            <div className="d-flex flex-column gap-3">
              <button onClick={() => handleChoice('Romantic Dinner')} className="btn-choice">🕯️ Romantic Dinner</button>
              <button onClick={() => handleChoice('Late Night Walk')} className="btn-choice">🌙 Late Night Walk</button>
              <button onClick={() => handleChoice('Surprise Trip')} className="btn-choice">✈️ Surprise Trip</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="romantic-text glow-text display-5 mb-4">Leave a Little Message 💌</h2>
            <textarea
              className="form-control romantic-input mb-4"
              rows="4"
              placeholder="Write something sweet..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={handleSend} className="btn-romantic btn-pink w-100">
              Send with Love ❤️
            </button>
          </>
        )}

        {step === 4 && (
          <div className="animate__animated animate__heartBeat">
            <i className="fa-solid fa-circle-check text-success display-1 mb-4"></i>
            <h2 className="romantic-text glow-text display-4">Sent with Love!</h2>
            <p className="lead dancing-script mt-3" style={{ fontSize: '1.5rem' }}>
              "Your message is on its way to my heart."
            </p>
            <button onClick={() => setShow(false)} className="btn-romantic btn-pink mt-4">Close</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .modal-backdrop-custom {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 10, 10, 0.9);
          backdrop-filter: blur(8px);
          z-index: 2000;
        }
        .surprise-modal {
          max-width: 500px;
          border: 2px solid #ff4d6d;
          background: rgba(26, 10, 10, 0.95);
          color: white;
        }
        .btn-romantic {
          padding: 12px 30px;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-pink { background: #ff4d6d; color: white; }
        .btn-forever { background: #bb96ff; color: white; }
        .btn-choice {
          padding: 15px;
          background: rgba(255, 77, 109, 0.1);
          border: 1px solid rgba(255, 77, 109, 0.3);
          color: white;
          border-radius: 15px;
          transition: all 0.3s;
          font-family: 'Poppins', sans-serif;
        }
        .btn-choice:hover {
          background: #ff4d6d;
          transform: translateY(-3px);
        }
        .romantic-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #ff4d6d;
          color: white;
          border-radius: 15px;
        }
        .romantic-input:focus {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border-color: #ff85a2;
          box-shadow: 0 0 10px rgba(255, 77, 109, 0.5);
        }
      `}</style>
    </div>
  );
};

export default SurpriseModal;
