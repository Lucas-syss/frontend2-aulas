import { useEffect, useState } from 'react';

const Companion = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [target, setTarget] = useState({ x: 100, y: 100 });
  const [offset, setOffset] = useState({ x: 30, y: 30 }); // Offset distance from the mouse

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const smoothMove = () => {
      // Apply a smooth movement towards the mouse position
      setPosition((prevPosition) => {
        const lerp = (start, end, t = 0.1) => start + (end - start) * t;

        const newX = lerp(prevPosition.x, target.x + offset.x);
        const newY = lerp(prevPosition.y, target.y + offset.y);

        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(smoothMove);
    };

    smoothMove();

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, offset]);

  return (
    <div className="relative">
      <div
        className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg fixed"
        style={{
          left: `${position.x - 20}px`, 
          top: `${position.y - 20}px`,  
          transition: 'none', 
        }}
      >
        <span className="absolute w-full h-full flex items-center justify-center text-white font-bold text-2xl">
          ⌐■_■
        </span>
      </div>
    </div>
  );
};

export default Companion;
