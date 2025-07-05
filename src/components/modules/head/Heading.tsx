import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

export default function Heading({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
