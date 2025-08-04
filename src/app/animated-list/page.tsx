'use client';

import { useState } from 'react';
import AnimatedList from '~/interaction/animated-list/components';

export default function AnimatedListPage() {
  const [list, setList] = useState<string[]>(['React', 'Next', 'Remix']);

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 0',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <AnimatedList>
        {list.map((it) => (
          <AnimatedList.Item key={it}>{it}</AnimatedList.Item>
        ))}
      </AnimatedList>

      <button onClick={() => setList(['React', 'Solid', 'Next', 'Remix'])}>
        TEST
      </button>
    </div>
  );
}
