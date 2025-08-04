import { MouseEvent, useCallback, useMemo, useState } from 'react';
import { Nullable } from '~/types';
import { CursorBloomEffect, CursorBloomTilt } from '../types';

export default function useCursorBloom() {
  const [effect, setEffect] = useState<Nullable<CursorBloomEffect>>(null);

  const [tilt, setTitle] = useState<Nullable<CursorBloomTilt>>(null);

  const [pressed, setPressed] = useState<boolean>(false);

  const handleMouseUnavailable = useCallback(() => {
    setEffect(null);
    setTitle(null);
  }, []);

  const handleMouseAvailable = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const { x, y, width, height } = e.currentTarget.getBoundingClientRect();

    const relativeX = e.clientX - x;
    const relativeY = e.clientY - y;

    setEffect({
      x: relativeX,
      y: relativeY,
    });

    setTitle({
      rotateX: (relativeX / width - 0.5) * 30,
      rotateY: (0.5 - relativeY / height) * 30,
    });
  }, []);

  const handlePressStart = useCallback(() => {
    setPressed(true);
  }, []);

  const handlePressEnd = useCallback(() => {
    setPressed(false);
  }, []);

  return {
    effect,
    tilt,
    pressed,
    onMouseEnter: handleMouseAvailable,
    onMouseMove: handleMouseAvailable,
    onMouseLeave: handleMouseUnavailable,
    onMouseDown: handlePressStart,
    onMouseUp: handlePressEnd,
  };
}
