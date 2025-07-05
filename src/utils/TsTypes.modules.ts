export interface MetaDataProps {
  title?: string;
  description?: string;
  icon?: string;
  images?: string;
  keywords?: string[];
  params?: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}
