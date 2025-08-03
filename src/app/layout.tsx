'use client';

import GlobalStyle from '~/style/GlobalStyle';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <GlobalStyle />
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}
