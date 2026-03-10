import React, { useState, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-floating glass-effect p-3 soft-shadow animate__animated animate__fadeInRight">
      <audio
        ref={audioRef}
        src="https://archive.org/download/monsterkill_201805/Phir%20Bhi%20Tumko%20Chaahunga%20-%20Full%20Video%20_20Half%20Girlfriend_%20Arjun%20K%2CShraddha%20K%20_%20Arijit%20Singh_%20Mithoon.mp3"
        loop
      />

      <div className="d-flex align-items-center gap-3">
        <button
          onClick={togglePlay}
          className="play-btn d-flex align-items-center justify-content-center smooth-transition"
        >
          <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-white`}></i>
        </button>

        <div className="song-info">
          <p className="romantic-text m-0" style={{ fontSize: '1rem' }}>Our Song ❤️</p>
          <div className="progress-bar-container">
            <div className={`progress-indicator ${isPlaying ? 'animating' : ''}`}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .music-player-floating {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          min-width: 200px;
          border-radius: 50px;
        }
        .play-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background: #ff4d6d;
          box-shadow: 0 5px 15px rgba(255, 77, 109, 0.3);
        }
        .play-btn:hover {
          transform: scale(1.1);
          background: #c9184a;
        }
        .progress-bar-container {
          width: 100px;
          height: 4px;
          background: rgba(255, 77, 109, 0.2);
          border-radius: 2px;
          margin-top: 5px;
          overflow: hidden;
        }
        .progress-indicator {
          width: 30%;
          height: 100%;
          background: #ff4d6d;
          border-radius: 2px;
        }
        .progress-indicator.animating {
          animation: progressMove 3s infinite linear;
        }
        @keyframes progressMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
