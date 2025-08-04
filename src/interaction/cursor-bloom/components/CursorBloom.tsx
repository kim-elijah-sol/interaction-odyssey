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

  function handleMouseLeave(e: MouseEvent<HTMLDivElement>) {
    setEffectPosition(null);
  }

  function handleSetEffectPosition(e: MouseEvent<HTMLDivElement>) {
    const { x, y } = e.currentTarget.getBoundingClientRect();

    setEffectPosition({
      x: e.clientX - x,
      y: e.clientY - y,
    });
  }

  return (
    <div
      css={s.container}
      onMouseEnter={handleSetEffectPosition}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleSetEffectPosition}
    >
      <p css={s.top}>{props.top}</p>

      <span css={s.description}>{props.description}</span>

      {effectPosition !== null && (
        <div
          css={s.effect}
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
    animationName: k.effect,
    animationFillMode: 'forwards',
    animationDuration: '0.7s',
    animationTimingFunction: 'ease',
  }),
};
