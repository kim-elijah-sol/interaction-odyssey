import { css, keyframes } from '@emotion/react';
import { useCursorBloom } from '../hooks';

type Props = {
  gradients: string[];
  top: React.ReactNode;
  description: React.ReactNode;
};

export default function CursorBloom(props: Props) {
  const { effect, tilt, pressed, ...containerProps } = useCursorBloom();

  return (
    <div
      css={s.container(props.gradients)}
      {...containerProps}
      style={
        tilt
          ? {
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) rotateZ(0)`,
            }
          : undefined
      }
    >
      <p css={s.top}>{props.top}</p>

      <span css={s.description}>{props.description}</span>

      {effect !== null && (
        <div
          css={[s.effect, pressed ? s.spreadEffect : null]}
          style={{
            left: effect.x,
            top: effect.y,
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
  container: (gradients: string[]) =>
    css({
      padding: '24px',
      background: `linear-gradient(135deg, ${gradients.join(', ')})`,
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
    transition: 'width 0.6s, height 0.6s, background 0.4s',
    animationName: k.effect,
    animationFillMode: 'forwards',
    animationDuration: '0.7s',
    animationTimingFunction: 'ease',
  }),
  spreadEffect: css({
    width: '400%',
    height: '400%',
    background:
      'radial-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0))',
  }),
};
