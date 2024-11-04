"use client";

import React, { useState, useEffect, forwardRef, useRef, MutableRefObject } from "react";
import { PiMusicNotesFill } from "react-icons/pi";
import { TbMusicOff } from "react-icons/tb";

const Musics = forwardRef<HTMLAudioElement | null>((_, ref) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const musicRef = (ref as MutableRefObject<HTMLAudioElement | null>)?.current || audioRef.current;
    if (musicRef) {
      musicRef.muted = isMuted;
      musicRef.play().catch((error: unknown) => {
        console.log("Autoplay failed:", error);
      });
    }
  }, [isMuted, ref]);

  const toggleMute = () => {
    const musicRef = (ref as MutableRefObject<HTMLAudioElement | null>)?.current || audioRef.current;
    if (musicRef) {
      musicRef.muted = !musicRef.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <div className="hidden">
        <audio loop ref={ref || audioRef}>
          <source src="music/Lucky.mp3" />
        </audio>
      </div>

      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
        className="fixed bottom-5 right-5 bg-gray-300 text-bgBlue p-2 rounded-full z-50"
      >
        {isMuted ? <TbMusicOff size={30} /> : <PiMusicNotesFill size={30} />}
      </button>
    </>
  );
});

Musics.displayName = "Musics";

export default Musics;
