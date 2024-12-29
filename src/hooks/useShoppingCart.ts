import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByItems,
  changeQuantity,
  removeItem,
} from "@store/cart/cartSlice";

const useShoppingCart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());
    return () => {
      dispatch(actGetProductsByItems());
      promise.abort();
    };
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id] || 0,
  }));

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(changeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(removeItem(id));
    },
    [dispatch]
  );

  return { loading, error, products, changeQuantityHandler, removeItemHandler };
};

export default useShoppingCart;
