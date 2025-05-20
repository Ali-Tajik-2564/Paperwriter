import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paper Writer',
  description: 'this is a place that you can your own resume',
  icons: {
    icon: 'https://www.myperfectpaper.net/images/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> {children}</body>
    </html>
  );
}
