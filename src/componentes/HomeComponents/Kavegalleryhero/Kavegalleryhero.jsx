import { useRef, useState } from "react";
import video from "../../../assets/video/video-1.webm";

 
const styles = `
.kg-hero {
  position: relative;
  height: 620px;
  overflow: hidden;
  max-width: 1250px;
  margin: auto;
  margin-top: 20px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  }
  
  .kg-video {
    position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.kg-tint {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(20,10,5,0.15) 0%, rgba(20,10,5,0.35) 100%);
  z-index: 1;
}

.kg-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0 24px;
}

.kg-eyebrow {
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: 10px;
  text-shadow: 0 1px 8px rgba(0,0,0,0.35);
}

.kg-title {
  font-family: font-1;
  font-weight: 400;
  font-size: 100px;
  line-height: 1;
  margin-bottom: 26px;
  text-shadow: 0 2px 14px rgba(0,0,0,0.3);
}

.kg-actions {
  display: flex;
  gap: 10px;
}

.kg-btn {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.3px;
  padding: 13px 24px;
  border: none;
  cursor: pointer;
  transition: opacity 0.25s ease;
}

.kg-btn:hover { opacity: 0.85; }

.kg-btn.primary {
  background: #7a3b2e;
  color: #fff;
}

.kg-btn.secondary {
  background: #fff;
  color: #111;
}

.kg-toggle {
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 2;
  width: 34px;
  height: 34px;
  background: rgba(255,255,255,0.85);
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .kg-hero { height: 480px; }
  .kg-title { font-size: 40px; }
  .kg-actions { flex-direction: column; width: 100%; max-width: 260px; }
}
`;

export default function KaveGalleryHero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <section className="kg-hero">
        <video
          ref={videoRef}
          className="kg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* Apna asal video src yahan daalein */}
          <source
            src={video}
            type="video/webm"
          />
        </video>
        <div className="kg-tint"></div>

        <div className="kg-content">
          <p className="kg-eyebrow">The Mediterranean as an artistic narrative.</p>
          <h1 className="kg-title">Kave Gallery</h1>
          <div className="kg-actions">
            <button className="kg-btn primary">Discover the project</button>
            <button className="kg-btn secondary">View artworks</button>
          </div>
        </div>

        <button
          className="kg-toggle"
          onClick={toggleVideo}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? "II" : "▶"}
        </button>
      </section>
    </>
  );
}