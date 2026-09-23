import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  Repeat,
  Upload,
  Film,
  Sparkles
} from 'lucide-react';
import { featuredWorkConfig } from '../data/portfolioData';

export const FeaturedWork = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const fileInputRef = useRef(null);

  const [videoSrc, setVideoSrc] = useState(featuredWorkConfig?.videoSrc || '/videos/featured-work.mp4');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [bufferedEnd, setBufferedEnd] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(true); // Browsers allow autoplay when muted
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLooping, setIsLooping] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [isDraggingSeek, setIsDraggingSeek] = useState(false);
  const [seekHoverTime, setSeekHoverTime] = useState(null);
  const [seekHoverPos, setSeekHoverPos] = useState(0);
  const [pulseAction, setPulseAction] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [customFileName, setCustomFileName] = useState(null);

  const controlsTimeoutRef = useRef(null);

  // Auto-play muted on mount (matching modern video showcase UX)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay was prevented by browser policy, keep paused
          setIsPlaying(false);
        });
    }
  }, [videoSrc]);

  // Activity timer to fade out controls after inactivity
  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        if (!isDraggingSeek) {
          setShowControls(false);
        }
      }, 3000);
    }
  }, [isPlaying, isDraggingSeek]);

  const handleMouseLeave = useCallback(() => {
    if (isPlaying && !isDraggingSeek) {
      setShowControls(false);
    }
  }, [isPlaying, isDraggingSeek]);

  // Play / Pause toggle
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play().then(() => {
        setIsPlaying(true);
        triggerPulse('play');
      }).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
      triggerPulse('pause');
      setShowControls(true);
    }
  }, []);

  const triggerPulse = (action) => {
    setPulseAction(action);
    setTimeout(() => setPulseAction(null), 600);
  };

  // Skip time (+/- 10s)
  const skipTime = useCallback((seconds) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(Math.max(video.currentTime + seconds, 0), duration || video.duration);
    triggerPulse(seconds > 0 ? 'forward' : 'rewind');
  }, [duration]);

  // Mute toggle
  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !isMuted;
    video.muted = newMuted;
    setIsMuted(newMuted);
    if (!newMuted && volume === 0) {
      setVolume(0.8);
      video.volume = 0.8;
    }
  }, [isMuted, volume]);

  // Volume slider change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    const video = videoRef.current;
    if (!video) return;
    video.volume = newVolume;
    setVolume(newVolume);
    if (newVolume === 0) {
      video.muted = true;
      setIsMuted(true);
    } else if (isMuted) {
      video.muted = false;
      setIsMuted(false);
    }
  };

  // Playback rate cycle (1x -> 1.25x -> 1.5x -> 2x -> 0.75x)
  const cyclePlaybackRate = () => {
    const rates = [1, 1.25, 1.5, 2, 0.75];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    if (videoRef.current) {
      videoRef.current.playbackRate = nextRate;
      setPlaybackRate(nextRate);
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Time & Buffer update
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || isDraggingSeek) return;
    setCurrentTime(video.currentTime);

    // Buffer range
    if (video.buffered && video.buffered.length > 0) {
      try {
        const bufferedTime = video.buffered.end(video.buffered.length - 1);
        setBufferedEnd(bufferedTime);
      } catch {
        // Safe fallback
      }
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
    setVideoLoaded(true);
  };

  // Scrubber calculation
  const getScrubPercent = (e) => {
    const bar = progressBarRef.current;
    if (!bar) return 0;
    const rect = bar.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return pos / rect.width;
  };

  const handleSeekMouseDown = (e) => {
    setIsDraggingSeek(true);
    const percent = getScrubPercent(e);
    if (videoRef.current && duration) {
      const targetTime = percent * duration;
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const handleSeekMouseMove = (e) => {
    const percent = getScrubPercent(e);
    if (duration) {
      setSeekHoverTime(percent * duration);
      setSeekHoverPos(percent * 100);
    }
    if (isDraggingSeek && videoRef.current && duration) {
      const targetTime = percent * duration;
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const handleSeekMouseLeave = () => {
    setSeekHoverTime(null);
    if (isDraggingSeek) {
      setIsDraggingSeek(false);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingSeek) {
        setIsDraggingSeek(false);
      }
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [isDraggingSeek]);

  // Keyboard controls when section is focused/active
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.code === 'Space') {
        // Prevent page scroll only if hovering the video
        if (containerRef.current && containerRef.current.contains(document.activeElement)) {
          e.preventDefault();
          togglePlay();
        }
      } else if (e.code === 'KeyM') {
        toggleMute();
      } else if (e.code === 'KeyF') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, toggleMute]);

  // Custom user video upload / select handler
  const handleCustomVideoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setVideoSrc(fileUrl);
      setCustomFileName(file.name);
      setIsPlaying(false);
    }
  };

  // Time format helper
  const formatTime = (timeInSeconds) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return '0:00';
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const bufferedPercent = duration > 0 ? (bufferedEnd / duration) * 100 : 0;

  return (
    <section id="featured-work" className="py-14 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
      {/* Heading matching user's exact reference */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          {featuredWorkConfig?.heading || "Featured Work"}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed">
          {featuredWorkConfig?.subtitle || "I blend technology, creativity, and empathy to craft seamless experiences that bridge people, spaces, and services."}
        </p>
      </div>

      {/* Main Large Cinematic Video Container */}
      <div
        ref={containerRef}
        tabIndex={0}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden glass-card-elevated border border-white/[0.12] shadow-2xl shadow-black/95 group select-none transition-all duration-300 outline-none focus:ring-1 focus:ring-pink-accent/50 ${
          isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'aspect-video md:aspect-[16/10]'
        }`}
      >
        {/* HTML5 Video Element */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={featuredWorkConfig?.poster}
          playsInline
          loop={isLooping}
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
          className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-700 ease-out"
        />

        {/* Pulse Feedback Overlay (play/pause/skip feedback) */}
        {pulseAction && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
            <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white animate-ping">
              {pulseAction === 'play' && <Play className="w-8 h-8 fill-white ml-1 text-white" />}
              {pulseAction === 'pause' && <Pause className="w-8 h-8 text-white" />}
              {pulseAction === 'forward' && <RotateCw className="w-8 h-8 text-white" />}
              {pulseAction === 'rewind' && <RotateCcw className="w-8 h-8 text-white" />}
            </div>
          </div>
        )}

        {/* Big Center Play Button (Visible when paused) */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] cursor-pointer z-10 transition-opacity duration-300"
          >
            <div className="group/playbtn relative flex items-center justify-center">
              {/* Outer soft glow ring */}
              <div className="absolute inset-0 rounded-full bg-pink-accent/30 blur-xl scale-125 group-hover/playbtn:scale-150 transition-transform duration-500" />
              <button
                type="button"
                aria-label="Play Video"
                className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full border-2 border-white/80 bg-black/70 hover:bg-black/90 text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/playbtn:scale-110 group-hover/playbtn:border-pink-accent"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1.5 transition-transform duration-300 group-hover/playbtn:scale-105" />
              </button>
            </div>
          </div>
        )}

        {/* Audio Muted Indicator Badge (Top Right) */}
        {isMuted && isPlaying && (
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 border border-white/15 text-xs text-white/90 backdrop-blur-md flex items-center gap-1.5 transition-all shadow-lg hover:border-pink-accent/50 cursor-pointer"
            title="Click to Unmute"
          >
            <VolumeX className="w-3.5 h-3.5 text-pink-accent" />
            <span>Unmute Audio</span>
          </button>
        )}

        {/* Custom Video Active Notification (if user loaded local file) */}
        {customFileName && (
          <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-black/70 border border-white/15 text-xs text-pink-accent backdrop-blur-md flex items-center gap-1.5 shadow-lg">
            <Film className="w-3.5 h-3.5" />
            <span className="text-gray-300 truncate max-w-[200px]">{customFileName}</span>
          </div>
        )}

        {/* Control Bar Overlay: Slides/Fades based on activity */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-30 transition-all duration-300 ease-out bg-gradient-to-t from-black/95 via-black/75 to-transparent pt-12 pb-3 px-3 sm:px-6 ${
            showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          {/* 1. ORANGE SCRUBBER / TIMELINE PROGRESS BAR (Exact match to reference) */}
          <div
            ref={progressBarRef}
            onMouseDown={handleSeekMouseDown}
            onMouseMove={handleSeekMouseMove}
            onMouseLeave={handleSeekMouseLeave}
            onTouchStart={handleSeekMouseDown}
            onTouchMove={handleSeekMouseMove}
            className="relative w-full h-2.5 sm:h-3 flex items-center cursor-pointer group/scrub mb-2.5 sm:mb-3"
          >
            {/* Hover Timestamp Tooltip */}
            {seekHoverTime !== null && (
              <div
                className="absolute -top-7 transform -translate-x-1/2 px-2 py-0.5 rounded bg-black/90 text-white text-[11px] font-mono border border-white/15 pointer-events-none z-30 shadow-md whitespace-nowrap"
                style={{ left: `${seekHoverPos}%` }}
              >
                {formatTime(seekHoverTime)}
              </div>
            )}

            {/* Background Track */}
            <div className="w-full h-1 group-hover/scrub:h-1.5 bg-white/20 rounded-full overflow-hidden relative transition-all duration-150">
              {/* Buffered Progress */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-white/30 rounded-full transition-all duration-300"
                style={{ width: `${bufferedPercent}%` }}
              />
              {/* Played Progress (Prominent Orange Bar matching reference) */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-[#ff5722] bg-gradient-to-r from-amber-500 via-[#ff5722] to-[#ff4500] rounded-full shadow-[0_0_10px_rgba(255,87,34,0.6)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Scrubber Knob / Handle (Glowing Ring) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#ff5722] shadow-[0_0_10px_rgba(255,87,34,0.9)] transform -translate-x-1/2 opacity-0 group-hover/scrub:opacity-100 transition-opacity pointer-events-none scale-110"
              style={{ left: `${progressPercent}%` }}
            />
          </div>

          {/* 2. BOTTOM CONTROLS ROW */}
          <div className="flex items-center justify-between gap-2 sm:gap-4 text-white">
            {/* Left: Time Display (Elapsed / Duration or custom tag) */}
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs sm:text-xs font-mono text-gray-300 font-medium tracking-tight">
                {formatTime(currentTime)} <span className="text-gray-500">/</span> {formatTime(duration)}
              </span>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-gray-300 border border-white/10">
                1080p HD
              </span>
            </div>

            {/* Center: Playback Navigation & Glowing Round Play Button (Exact Reference Match) */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Skip Back 10s */}
              <button
                type="button"
                onClick={() => skipTime(-10)}
                aria-label="Rewind 10 seconds"
                className="p-1.5 sm:p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                title="Rewind 10s"
              >
                <RotateCcw className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Main Circular Glowing Play/Pause Button */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="relative p-2 sm:p-2.5 rounded-full border border-pink-400/90 sm:border-pink-300 bg-black/60 text-white hover:scale-110 transition-all duration-200 shadow-[0_0_16px_rgba(233,139,171,0.45)] hover:shadow-[0_0_24px_rgba(233,139,171,0.7)] group/centerplay cursor-pointer"
                title={isPlaying ? "Pause (Space)" : "Play (Space)"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-pink-200 fill-pink-200" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-pink-200 fill-pink-200 ml-0.5" />
                )}
              </button>

              {/* Skip Forward 10s */}
              <button
                type="button"
                onClick={() => skipTime(10)}
                aria-label="Forward 10 seconds"
                className="p-1.5 sm:p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                title="Forward 10s"
              >
                <RotateCw className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>
            </div>

            {/* Right: Audio, Speed, Fullscreen, Video Selector */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Volume Slider with Mute Button */}
              <div className="flex items-center group/vol">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  className="p-1.5 sm:p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title={isMuted ? "Unmute (M)" : "Mute (M)"}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-pink-accent" />
                  ) : volume < 0.5 ? (
                    <Volume1 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  ) : (
                    <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-0 group-hover/vol:w-16 sm:group-hover/vol:w-20 transition-all duration-200 h-1 bg-white/30 rounded-lg accent-pink-accent cursor-pointer opacity-0 group-hover/vol:opacity-100"
                  aria-label="Volume Slider"
                />
              </div>

              {/* Loop Toggle */}
              <button
                type="button"
                onClick={() => setIsLooping(!isLooping)}
                className={`p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer ${
                  isLooping ? 'text-pink-accent bg-pink-accent/15' : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title={isLooping ? "Loop Enabled" : "Loop Disabled"}
              >
                <Repeat className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Playback Rate / Speed Selector */}
              <button
                type="button"
                onClick={cyclePlaybackRate}
                className="px-2 py-1 text-[11px] font-mono font-semibold rounded bg-white/10 hover:bg-white/20 text-gray-200 transition-colors cursor-pointer"
                title="Change Playback Speed"
              >
                {playbackRate}x
              </button>

              {/* Replace / Upload Own Video Button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-1.5 sm:p-2 text-gray-300 hover:text-pink-accent rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                title="Select your own video file (.mp4, .webm)"
              >
                <Upload className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm,video/ogg,video/quicktime"
                onChange={handleCustomVideoUpload}
                className="hidden"
              />

              {/* Fullscreen Toggle */}
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                className="p-1.5 sm:p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                ) : (
                  <Maximize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Helpful Hint beneath the video */}
      <div className="flex items-center justify-between mt-4 px-2 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-pink-accent" />
          <span>Interactive Cinematic Showcase · Space to Play/Pause · F for Fullscreen</span>
        </span>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="text-pink-accent hover:underline hover:text-pink-hover text-xs inline-flex items-center gap-1 transition-colors cursor-pointer"
        >
          <Upload className="w-3 h-3" /> Change Video File
        </button>
      </div>
    </section>
  );
};

export default FeaturedWork;
