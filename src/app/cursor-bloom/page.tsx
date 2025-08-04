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
