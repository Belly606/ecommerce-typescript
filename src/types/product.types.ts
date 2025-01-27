export type TProduct = {
  id: number;
  title: string;
  cat_prefix: string;
  image: string;
  price: number;
  quantity?: number;
  max: number;
  isLiked?: boolean;
};
