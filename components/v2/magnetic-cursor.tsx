'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styled from 'styled-components';

const CursorDot = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #e8e8e8;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
`;

const CursorRing = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(232, 232, 232, 0.5);
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
`;

export default function MagneticCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  const ringX = useSpring(dotX, { damping: 22, stiffness: 180 });
  const ringY = useSpring(dotY, { damping: 22, stiffness: 180 });

  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMagneticOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const magnetic = target.closest('[data-magnetic]') as HTMLElement | null;
      if (!magnetic) return;

      const rect = magnetic.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      dotX.set(dotX.get() + (centerX - dotX.get()) * 0.3);
      dotY.set(dotY.get() + (centerY - dotY.get()) * 0.3);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMagneticOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMagneticOver);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [dotX, dotY]);

  if (isTouch) return null;

  return (
    <>
      <CursorDot style={{ x: dotX, y: dotY }} />
      <CursorRing style={{ x: ringX, y: ringY }} />
    </>
  );
}
