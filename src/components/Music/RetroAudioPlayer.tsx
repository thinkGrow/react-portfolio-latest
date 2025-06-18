import React, { useRef, useState, useCallback, useEffect } from "react";

const RetroAudioPlayer = ({ onClose }: { onClose: () => void }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePlay = () => audioRef.current?.play();
  const handlePause = () => audioRef.current?.pause();
  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    const rect = playerRef.current!.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (dragging && playerRef.current) {
        playerRef.current.style.left = `${e.clientX - offset.x}px`;
        playerRef.current.style.top = `${e.clientY - offset.y}px`;
      }
    },
    [dragging, offset],
  );

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={playerRef}
      className="absolute left-1/2 -translate-x-1/2 top-24 z-20 
               bg-[#257656] border-4 border-[#6ee7b7] rounded-md shadow-lg 
               font-mono text-white text-sm"
      style={{ width: "150px" }}
    >
      {/* Drag handle */}
      <div
        onMouseDown={handleMouseDown}
        className="cursor-move bg-[#145a4d] px-3 py-1 flex items-center justify-between text-xs font-bold select-none"
      >
        <span>🎵 MP3 Player</span>
        <button
          onClick={onClose}
          className="ml-2 text-white hover:text-red-400 font-bold"
        >
          ✖
        </button>
      </div>

      {/* Controls */}
      <div className="p-3 flex flex-col items-center gap-2">
        <audio ref={audioRef} src="/assets/music.mp3" preload="metadata" loop />
        <div className="flex gap-2">
          <button
            onClick={handlePlay}
            className="bg-[#6ee7b7] text-black px-2 py-1 border-2 border-black hover:bg-white transition"
          >
            ▶
          </button>
          <button
            onClick={handlePause}
            className="bg-[#6ee7b7] text-black px-2 py-1 border-2 border-black hover:bg-white transition"
          >
            ❚❚
          </button>
          <button
            onClick={handleStop}
            className="bg-[#6ee7b7] text-black px-2 py-1 border-2 border-black hover:bg-white transition"
          >
            ■
          </button>
        </div>

        {/* Volume */}
        <div className="w-full flex items-center gap-2 mt-2">
          <label htmlFor="volume" className="text-xs">🔊</label>
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="1"
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.volume = parseFloat(e.target.value);
              }
            }}
            className="w-full accent-[#6ee7b7]"
          />
        </div>
      </div>
    </div>
  );
};

export default RetroAudioPlayer;
