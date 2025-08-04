'use client';

import { CursorBloom } from '~/interaction/cursor-bloom/components';

export default function CursorBloomPage() {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px 0',
      }}
    >
      <CursorBloom
        gradients={['#3a78ff', '#85a7f1']}
        top='Cursor Bloom'
        description={
          <>
            An interactive hover effect where a<br />
            gradient bloom follows the mouse cursor.
          </>
        }
      />
      <CursorBloom
        gradients={['#ff9bd9', '#fac1e4']}
        top='Cursor Bloom'
        description={
          <>
            An interactive hover effect where a<br />
            gradient bloom follows the mouse cursor.
          </>
        }
      />
      <CursorBloom
        gradients={['#ce52ff', '#ce8de7']}
        top='Cursor Bloom'
        description={
          <>
            An interactive hover effect where a<br />
            gradient bloom follows the mouse cursor.
          </>
        }
      />
    </div>
  );
}
