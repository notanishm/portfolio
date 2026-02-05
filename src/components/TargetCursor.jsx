import { useEffect, useRef } from 'react';

function TargetCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let animationId;

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }

      if (ring) {
        ring.style.left = `${x}px`;
        ring.style.top = `${y}px`;
      }
    };

    const animate = () => {
      if (ring) {
        const scale = parseFloat(ring.style.transform.replace(/[^\d.]/g, '') || 1) || 1;
        const newScale = scale + 0.02;
        if (newScale > 1.5) {
          ring.style.transform = 'translate(-50%, -50%) scale(0)';
        } else {
          ring.style.transform = `translate(-50%, -50%) scale(${newScale})`;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move);
    animate();

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          background: '#fff',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '2px solid #fff',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%) scale(0)',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}

export default TargetCursor;
