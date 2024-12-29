import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { TProduct } from "@types";

type TCartItemListProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItemList = ({
  products,
  changeQuantityHandler,
  removeItemHandler,
}: TCartItemListProps) => {
  const render = products.map((el) => (
    <ShoppingCartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
      removeItemHandler={removeItemHandler}
    />
  ));
  return <div>{render}</div>;
};

export default CartItemList;
