import { css, keyframes } from '@emotion/react';
import { MouseEventHandler, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  index?: number;
  isDelayRemove?: boolean;

  onClick?: MouseEventHandler<HTMLDivElement>;
}>;

export default function AnimatedListItem(props: Props) {
  const index = (props.index as number) ?? 0;

  const delay = props.isDelayRemove ? 0 : index * 0.3;

  const top = index * 48;

  return (
    <div
      onClick={props.onClick}
      css={s.container}
      style={{
        animationDelay: `${delay}s`,
        top,
      }}
    >
      {props.children}
    </div>
  );
}

const k = {
  container: keyframes({
    from: {
      opacity: 0,
      transform: 'translateY(16px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
  }),
};

const s = {
  container: css({
    opacity: 0,
    animationName: k.container,
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease',
    animationDuration: '0.5s',

    width: 300,
    padding: '8px 16px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',

    position: 'absolute',
    left: 0,
    right: 0,
    transition: '0.3s',
  }),
};
