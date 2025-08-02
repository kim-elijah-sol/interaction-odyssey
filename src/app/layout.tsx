'use client';

import GlobalStyle from '~/style/GlobalStyle';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <GlobalStyle />
      <body>{children}</body>
    </html>
  );
}
