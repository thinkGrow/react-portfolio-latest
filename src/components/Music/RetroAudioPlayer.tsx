import React, { useRef, useState, useEffect, useCallback } from "react";

const RetroAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [minimized, setMinimized] = useState(false);

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
    [dragging, offset]
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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25;
    }
  }, []);

  return (
    <div
      ref={playerRef}
      className={`absolute z-20 ${
        minimized
          ? "bg-transparent border-none shadow-none"
          : "bg-[#257656] border-4 border-[#6ee7b7] shadow-lg"
      } rounded-md font-mono text-white text-sm`}
      style={{
        width: minimized ? "auto" : "150px",
        left: "50%",
        transform: "translateX(-50%)",
        top: "6rem",
      }}
    >
      {/* Always-mounted audio */}
      <audio ref={audioRef} src="/assets/music.mp3" preload="metadata" loop />

      {/* Drag handle */}
      <div
        onMouseDown={handleMouseDown}
        className={`cursor-move ${
          minimized ? "" : "bg-[#145a4d]"
        } px-3 py-1 flex items-center justify-between text-xs font-bold select-none`}
      >
        {!minimized ? (
          <>
            <span>🎵 MP3 Player</span>
            <div className="flex items-center gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMinimized(true);
                  if (audioRef.current && !audioRef.current.paused) {
                    audioRef.current.play().catch(() => {});
                  }
                }}
                className="text-white hover:text-yellow-300 font-bold px-1"
              >
                &minus;
              </button>
              {/* <button
                onClick={onClose}
                className="text-white hover:text-red-400 font-bold"
              >
                ✖
              </button> */}
            </div>
          </>
        ) : (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setMinimized(false);
            }}
            className="w-14 h-14 rounded-full bg-[#145a4d] border-4 border-[#6ee7b7] flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform"
          >
            <img src="/assets/scyther.gif" alt="Scyther" className="w-8 h-8" />
          </div>
        )}
      </div>

      {/* Audio controls (only when not minimized) */}
      {!minimized && (
        <div className="p-3 flex flex-col items-center gap-2">
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

          {/* Volume Control */}
          <div className="w-full flex items-center gap-2 mt-2">
            <label htmlFor="volume" className="text-xs">
              🔊
            </label>
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              defaultValue="0.25"
              onChange={(e) => {
                if (audioRef.current) {
                  audioRef.current.volume = parseFloat(e.target.value);
                }
              }}
              className="w-full accent-[#6ee7b7]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RetroAudioPlayer;
