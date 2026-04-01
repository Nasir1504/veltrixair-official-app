import { useRef, useEffect, useState } from "react";
import { MuteIcon, UnMuteIcon } from "../assets/imgs/icons";

const VideoComponent = ({
  src,
  poster,
  className = "",
  autoPlay = true,
  isMuteIcon = true
}) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (autoPlay) video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [autoPlay]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>

      {isMuteIcon && <button
        className="absolute w-[4vw] aspect-square right-[2%] top-[10%] cursor-pointer z-1 opacity-20 hover:opacity-80"
        onClick={toggleMute}
        style={{
          backgroundImage: `url(${isMuted ? MuteIcon : UnMuteIcon})`,
          backgroundSize: "cover"
        }}
      />
      }
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        playsInline
        autoPlay={true}
        loop={true}
        // controls
        preload="none"
        className="w-full h-full object-cover"
      />

    </div>
  );
};

export default VideoComponent;