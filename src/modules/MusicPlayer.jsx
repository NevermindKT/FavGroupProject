import React, { useRef, useState, useEffect } from 'react';
import '/src/CSS/MyCSS.css';
import {tracks} from '../info/data/tracks.js';

function MusicPlayer() {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentTrack]);

    const handleTimeUpdate = () => {
        const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percent);
    };

    const handleSeek = (e) => {
        if (!audioRef.current) return;

        const newTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    const handleNext = () => {
        setCurrentTrack((prev) => (prev + 1) % tracks.length);
    };

    const handlePrev = () => {
        setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    };

    const formatTime = (time) => {
        if (isNaN(time)) return '00:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;
    };

    return (
        <div className="music-player">
            <div className="music-info">
                <div className="music-img">
                    <img src={tracks[currentTrack].img} alt="trackImg" className={`cover-image ${isPlaying ? "rotating" : ""}`}/>
                </div>
                <div className="music-name">
                    <h2>{tracks[currentTrack].title}</h2>
                </div>
            </div>

            <div className="player-controls">
                <audio
                    ref={audioRef}
                    src={tracks[currentTrack].src}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleNext}
                />
                <div className="controls">
                    <button onClick={handlePrev}>⏮</button>
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? '⏸' : '▶'}
                    </button>
                    <button onClick={handleNext}>⏭</button>

                    {audioRef.current && audioRef.current.duration ? (
                        <p className="length">
                            {formatTime(audioRef.current.currentTime)} / {formatTime(audioRef.current.duration)}
                        </p>
                    ) : (
                        <p className="length">00:00 / 00:00</p>
                    )}

                </div>
                <div className="inputs">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSeek}
                    />
                    <div className="inputs-inner">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                        />
                        <p>🕨</p>

                    </div>

                </div>
            </div>


            </div>

    );
}

export default MusicPlayer;
