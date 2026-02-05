import { useEffect, useRef, useState } from 'react';

function TargetCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let ringScale = 0;
    let ringGrowing = true;
    let targetRingSize = 1;
    let currentHoverScale = 1;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        setIsVisible(true);
      }

      // Check if hovering over interactive element
      const target = e.target;
      const isInteractive = target.closest('button, a, [role="button"], .menu-item, .close-btn, .menu-toggle');
      setIsHovering(!!isInteractive);
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      // Smooth hover scale transition
      const hoverTarget = isHovering ? 1.5 : 1;
      currentHoverScale += (hoverTarget - currentHoverScale) * 0.15;

      if (ringGrowing) {
        ringScale += 0.03;
        if (ringScale >= 1) {
          ringScale = 1;
          ringGrowing = false;
        }
      } else {
        ringScale -= 0.03;
        if (ringScale <= 0) {
          ringScale = 0;
          ringGrowing = true;
        }
      }

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
        const dotScale = isHovering ? 0.8 : 1;
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(${dotScale})`;
      }

      if (ringRef.current) {
        const baseSize = 20 + ringScale * 80;
        const size = baseSize * currentHoverScale;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.left = `${cursorX}px`;
        ringRef.current.style.top = `${cursorY}px`;
        
        // Change ring color on hover
        const opacity = isHovering ? 0.9 : 0.6;
        ringRef.current.style.borderColor = `rgba(255, 255, 255, ${opacity})`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, isHovering]);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          background: '#ffffff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          border: '2px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease, border-color 0.15s ease',
        }}
      />
    </>
  );
}

export default TargetCursor;
