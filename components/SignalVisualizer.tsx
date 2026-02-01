
import React, { useEffect, useRef, useState } from 'react';

export const SignalVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [noiseLevel, setNoiseLevel] = useState(0.4);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      
      // Draw Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let j = 0; j < height; j += 40) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
        ctx.stroke();
      }

      // Draw Base Signal (Sine) with Noise
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = isProcessing ? 'rgba(236, 72, 153, 0.4)' : 'rgba(236, 72, 153, 0.8)';
      
      for (let x = 0; x < width; x++) {
        const y = centerY + Math.sin((x + offset) * 0.02) * 50;
        // Add interactive noise
        const currentNoise = (Math.random() - 0.5) * 120 * noiseLevel;
        if (x === 0) ctx.moveTo(x, y + currentNoise);
        else ctx.lineTo(x, y + currentNoise);
      }
      ctx.stroke();

      // Draw "Cleaned" Signal if processing
      if (isProcessing) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#818cf8';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(129, 140, 248, 0.5)';
        
        for (let x = 0; x < width; x++) {
          const y = centerY + Math.sin((x + offset) * 0.02) * 50;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      offset += 2;
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [noiseLevel, isProcessing]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-xl overflow-hidden bg-black/60 border border-white/10 aspect-[21/9] md:aspect-[5/1]">
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={200} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 md:top-4 right-3 md:right-4 flex items-center gap-2">
           <span className={`text-[8px] md:text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${isProcessing ? 'border-pink-500/50 text-pink-400 bg-pink-500/10' : 'border-white/20 text-white/40'}`}>
             {isProcessing ? 'REALTIME_FILTER: ON' : 'RAW_TELEMETRY: ON'}
           </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 px-1">
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <label className="text-[10px] font-mono text-white/40 uppercase tracking-tighter whitespace-nowrap">Input Noise</label>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={noiseLevel} 
            onChange={(e) => setNoiseLevel(parseFloat(e.target.value))}
            className="w-full sm:w-48 accent-pink-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <button 
          onClick={() => setIsProcessing(!isProcessing)}
          className={`w-full lg:w-auto px-5 py-2.5 rounded-lg text-[10px] font-mono border transition-all ${isProcessing ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300' : 'bg-white/5 border-white/10 text-white/40 hover:text-white'}`}
        >
          {isProcessing ? 'DISABLE ML FILTER' : 'ENABLE ML FILTER'}
        </button>
      </div>
    </div>
  );
};
