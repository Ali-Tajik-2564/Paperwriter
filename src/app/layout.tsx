import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layouts/navbar/navbar';
import Footer from '@/components/layouts/footer/footer';
import { GenerateMetadata } from '@/components/modules/Metadatagenerator/GenerateMetadata';
import Heading from '@/components/modules/head/Heading';
import Head from 'next/head';

// export const metadata: Metadata = {
//   title: 'Paper Writer',
//   description: 'this is a place that you can your own resume',
//   icons: {
//     icon: 'https://www.myperfectpaper.net/images/favicon.svg',
//   },
// };

export const metadata = GenerateMetadata({
  title: 'Paper Writers',
  description: 'this is a place that you can your own resume',
  icon: './img/logo.svg',
  images: './img/logo.svg',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Heading title="Paper Writerss" /> */}

        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
