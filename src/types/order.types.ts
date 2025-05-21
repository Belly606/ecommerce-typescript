import { TProduct } from "./product.types";

export type TOrderItem = {
  userId: number;
  id: number;
  items: TProduct[];
  subtotal: number;
};
