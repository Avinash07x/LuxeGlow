import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;

      // ✅ SAFETY CHECK (IMPORTANT)
      if (!(target instanceof HTMLElement)) {
        setIsHovering(false);
        return;
      }

      const tagName = target.tagName;

      if (
        tagName === 'BUTTON' ||
        tagName === 'A' ||
        target.closest('.hoverable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <>
      {/* Outer Cursor */}
      <div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          width: 30,
          height: 30,
          border: '2px solid black',
          borderRadius: '50%',
          transition: 'transform 0.1s ease',
          zIndex: 9999,
        }}
      />

      {/* Inner Dot */}
      <div
        className={`custom-cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: isHovering ? 'black' : 'gray',
          transition: 'background-color 0.2s ease',
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CustomCursor;
