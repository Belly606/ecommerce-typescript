import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByItemsId,
  cartItemChangeQuantity,
  cartItemRemove,
  cartProductsFullInfoCleanUp,
} from "@store/cart/cartSlice";

const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    const promise = dispatch(actGetProductsByItemsId());

    return () => {
      promise.abort();
      dispatch(cartProductsFullInfoCleanUp());
    };
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  return { loading, error, products, changeQuantityHandler, removeItemHandler };
};

export default useCart;
