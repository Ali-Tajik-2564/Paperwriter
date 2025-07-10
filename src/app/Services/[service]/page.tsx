import React from 'react';

export default async function page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  return <div>{service}</div>;
}
