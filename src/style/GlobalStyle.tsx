'use client';

import { Global } from '@emotion/react';

export default function GlobalStyle() {
  return (
    <Global
      styles={`
            button,
            input {
              border: 0;
              appearance: none;
              background-color: transparent;
            }
          
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-decoration: none;
          
              &:focus {
                outline: 0;
              }
          
              -webkit-tap-highlight-color: transparent;
            }
        `}
    />
  );
}
