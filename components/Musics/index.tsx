"use client";

import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  MutableRefObject,
} from "react";
import { PiMusicNotesFill } from "react-icons/pi";
import { TbMusicOff } from "react-icons/tb";
import bunga from "@/public/bunga2.png";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Musics = forwardRef<
  HTMLAudioElement | null,
  { onOverlayDismiss: () => void }
>(({ onOverlayDismiss }, ref) => {
  const [isMuted, setIsMuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true); // Show overlay initially
  const audioRef = useRef<HTMLAudioElement>(null);

  // Start audio and hide overlay when "Play Music" is clicked
  const handlePlay = () => {
    const musicRef =
      (ref as MutableRefObject<HTMLAudioElement | null>)?.current ||
      audioRef.current;
    if (musicRef) {
      musicRef
        .play()
        .then(() => {
          setShowOverlay(false); // Hide overlay after music starts
          onOverlayDismiss(); // Trigger callback to notify Home component
        })
        .catch((error) => {
          console.log("Play failed:", error);
        });
    }
  };

  // Lock background scroll while overlay is visible
  useEffect(() => {
    document.body.style.overflow = showOverlay ? "hidden" : "auto";
  }, [showOverlay]);

  // Toggle mute control
  const toggleMute = () => {
    const musicRef =
      (ref as MutableRefObject<HTMLAudioElement | null>)?.current ||
      audioRef.current;
    if (musicRef) {
      musicRef.muted = !musicRef.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {showOverlay && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50 font-poppins">
          <div className="-mb-[30px] z-20">
            <Image src={bunga} alt="bunga" className="w-32" />
          </div>
          <div className="bg-white text-center p-6 rounded-lg border-2 border-bgBlue shadow-lg max-w-xs mx-4">
            <h2 className="text-xl font-bold mb-2 font-cinzel">
              Turn Up the Volume
            </h2>
            <p className="text-sm mb-4">
              The button below will start the music. Make sure your volume
              is up!
            </p>
            <button
              onClick={handlePlay}
              className="bg-gray-300 text-bgBlue p-3 rounded-full border-4 border-transparent hover:border-bgBlue animate-pulse duration-1000 hover:scale-105 focus:scale-105"
            >
              <FaPlay size={30} />
            </button>
          </div>
        </div>
      )}

      {/* Hidden audio element */}
      <div className="hidden">
        <audio loop ref={ref || audioRef}>
          <source src="music/Lucky.mp3" type="audio/mp3" />
        </audio>
      </div>

      {/* Mute/unmute button */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
        className="fixed bottom-5 right-5 bg-gray-300 text-bgBlue p-2 rounded-full z-40"
      >
        {isMuted ? <TbMusicOff size={30} /> : <PiMusicNotesFill size={30} />}
      </button>
    </>
  );
});

Musics.displayName = "Musics";

export default Musics;
