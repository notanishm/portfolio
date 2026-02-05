import { useEffect, useRef } from 'react';

function DitherBackground({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      time += 0.02;

      for (let y = 0; y < height; y += 4) {
        for (let x = 0; x < width; x += 4) {
          const wave = Math.sin(x * 0.02 + time) * Math.cos(y * 0.02 + time * 0.7);
          const noise = Math.random() * 0.3 + 0.35 + wave * 0.15;
          
          const shade = Math.floor(noise * 16);
          const gray = Math.floor((shade / 16) * 255);
          
          ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
          ctx.fillRect(x, y, 4, 4);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`dither-background ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}

export default DitherBackground;
