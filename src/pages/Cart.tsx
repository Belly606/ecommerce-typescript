import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
  cartProductsFullInfoCleanUp,
} from "@store/cart/cartSlice";
import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading } from "@components/feedback";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetProductsByItems());
    return () => {
      dispatch(cartProductsFullInfoCleanUp());
    };
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id] || 0,
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

  return (
    <>
      <Heading>Cart</Heading>
      <Loading status={loading} error={error}>
        {products.length ? (
          <>
            <CartItemList
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
              products={products}
            />
            <CartSubtotalPrice products={products} />
          </>
        ) : (
          "Your cart is empty"
        )}
      </Loading>
    </>
  );
};

export default Cart;
