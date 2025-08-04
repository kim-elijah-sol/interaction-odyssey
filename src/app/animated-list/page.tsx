'use client';

import AnimatedList from '~/interaction/animated-list/components';

export default function AnimatedListPage() {
  return (
    <AnimatedList
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        padding: '20px 0',
      }}
    >
      <AnimatedList.Item>React</AnimatedList.Item>
      <AnimatedList.Item>Next</AnimatedList.Item>
      <AnimatedList.Item>Remix</AnimatedList.Item>
    </AnimatedList>
  );
}
