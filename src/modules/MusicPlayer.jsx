import React, { useRef, useState, useEffect } from 'react';
import '/src/CSS/MyCSS.css';

const tracks = [
    {
        title: 'Fat Lip',
        src: '/songs/fat-lip-sum41.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Sum_41_All_Killer_No_Filler.jpg/250px-Sum_41_All_Killer_No_Filler.jpg',
    },
    {
        title: 'Still Waiting',
        src: '/songs/still-waiting.mp4',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Sum41_doesthislookinfected.png/250px-Sum41_doesthislookinfected.png',
    },
    {
        title: 'Pieces',
        src: '/songs/pieces.mp4',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Sum41chuck.jpg/250px-Sum41chuck.jpg',
    },
    {
        title: 'Walking Disaster',
        src: '/songs/walking-disaster.mp4',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/SUM_41_UNDERCLASS_HERO.jpg/250px-SUM_41_UNDERCLASS_HERO.jpg',
    },
    {
        title: 'Screaming Bloody Murder',
        src: '/songs/screaming-bloody-murder.mp4',
        img: 'https://upload.wikimedia.org/wikipedia/en/6/65/Screaming_Bloody_Murder.jpg',
    },
    {
        title: 'Goddamn I\'m Dead Again',
        src: '/songs/goddamn-i\'m-dead-again.mp4',
        img: 'https://upload.wikimedia.org/wikipedia/en/7/71/13_Voices_album_artwork.jpg',
    },
    {
        title: '45 (A Matter Of Time)',
        src: '/songs/45(a-matter-of-time).mp4',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Order_in_decline_sum_41.png/250px-Order_in_decline_sum_41.png',
    },
    {
        title: 'Landmines',
        src: '/songs/landmines.mp4',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Sum_41_-_Heaven_x_Hell.png/250px-Sum_41_-_Heaven_x_Hell.png',
    },
];

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
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                    />
                </div>
            </div>


            </div>

    );
}

export default MusicPlayer;
