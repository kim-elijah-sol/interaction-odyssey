import { css, keyframes } from '@emotion/react';
import { MouseEvent, useState } from 'react';

type Position = {
  x: number;
  y: number;
};

type Props = {
  top: React.ReactNode;
  description: React.ReactNode;
};

export default function CursorBloom(props: Props) {
  const [effectPosition, setEffectPosition] = useState<Position | null>(null);

  const [tiltValue, setTiltValue] = useState<Position | null>(null);

  const [pressed, setPressed] = useState<boolean>(false);

  function handleMouseUnavailable(e: MouseEvent<HTMLDivElement>) {
    setEffectPosition(null);
    setTiltValue(null);
  }

  function handleMouseAvailable(e: MouseEvent<HTMLDivElement>) {
    const { x, y, width, height } = e.currentTarget.getBoundingClientRect();

    const relativeX = e.clientX - x;
    const relativeY = e.clientY - y;

    setEffectPosition({
      x: relativeX,
      y: relativeY,
    });

    setTiltValue({
      x: (relativeX / width - 0.5) * 30,
      y: (0.5 - relativeY / height) * 30,
    });
  }

  function handleMouseDown() {
    setPressed(true);
  }

  function handleMouseUp() {
    setPressed(false);
  }

  return (
    <div
      css={s.container}
      onMouseEnter={handleMouseAvailable}
      onMouseLeave={handleMouseUnavailable}
      onMouseMove={handleMouseAvailable}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={
        tiltValue
          ? {
              transform: `rotateX(${tiltValue.x}deg) rotateY(${tiltValue.y}deg) rotateZ(0)`,
            }
          : undefined
      }
    >
      <p css={s.top}>{props.top}</p>

      <span css={s.description}>{props.description}</span>

      {effectPosition !== null && (
        <div
          css={[s.effect, pressed ? s.spreadEffect : null]}
          style={{
            left: effectPosition.x,
            top: effectPosition.y,
          }}
        ></div>
      )}
    </div>
  );
}

const k = {
  effect: keyframes({
    from: {
      transform: 'translate(-50%, -50%) scale(0)',
      opacity: 0,
    },
    to: {
      transform: 'translate(-50%, -50%) scale(1)',
      opacity: 1,
    },
  }),
};

const s = {
  container: css({
    padding: '24px',
    background: 'linear-gradient(135deg, #3a78ff, #85a7f1)',
    borderRadius: '36px',
    width: '380px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    perspective: '800px',
    transition: '0.1s',
    ':active': {
      transform: 'scale(0.98) !important',
    },
  }),
  top: css({
    fontWeight: 'bold',
    fontSize: '36px',
    marginBottom: '12px',
    color: 'white',
    userSelect: 'none',
  }),
  description: css({
    fontsize: '16px',
    color: '#f3f3f3',
    userSelect: 'none',
  }),
  effect: css({
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: '50%',
    background:
      'radial-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0) 70%)',
    transition: 'width 0.6s, height 0.6s, background 0.3s',
    animationName: k.effect,
    animationFillMode: 'forwards',
    animationDuration: '0.7s',
    animationTimingFunction: 'ease',
  }),
  spreadEffect: css({
    width: '500%',
    height: '500%',
    background:
      'radial-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0))',
  }),
};
