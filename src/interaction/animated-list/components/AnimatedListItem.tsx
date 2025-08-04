import { css, keyframes } from '@emotion/react';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  index?: number;
  isDelayRemove?: boolean;
}>;

export default function AnimatedListItem(props: Props) {
  const index = (props.index as number) ?? 0;

  const delay = props.isDelayRemove ? 0 : index * 0.3;

  return (
    <div
      css={s.container}
      style={{
        animationDelay: `${delay}s`,
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
  }),
};
