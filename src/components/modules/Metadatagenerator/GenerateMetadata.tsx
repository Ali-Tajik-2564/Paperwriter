import { MetaDataProps } from '@/utils/TsTypes.modules';
import type { Metadata, ResolvingMetadata } from 'next';

export async function GenerateMetadata({
  title,
  description,
  icon,
  images,
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  //   const slug = (await params).slug;
  //   // fetch post information
  //   const post = await fetch(`https://api.vercel.app/blog/${slug}`).then((res) =>
  //     res.json()
  //   );
  //   return {
  //     title: post.title,
  //     description: post.description,
  //   };
  return {
    title,
    description,
    icons: {
      icon,
    },
    openGraph: {
      title,
      description,
      images,
    },
  };
}
