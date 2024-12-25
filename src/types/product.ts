export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  quantity?: number;
  max: number;
};
