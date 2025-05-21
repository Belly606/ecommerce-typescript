import useCart from "@hooks/useCart";
import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading, LottieHandler } from "@components/feedback";

const Cart = () => {
  const {
    loading,
    error,
    products,
    userAccessToken,
    changeQuantityHandler,
    removeItemHandler,
  } = useCart();

  return (
    <>
      <Heading title="Your Cart" />
      <Loading status={loading} error={error} type="cart">
        {products.length ? (
          <>
            <CartItemList
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
              products={products}
            />
            <CartSubtotalPrice
              userAccessToken={userAccessToken}
              products={products}
            />
          </>
        ) : (
          <LottieHandler type="empty" message="Your cart is empty" />
        )}
      </Loading>
    </>
  );
};

export default Cart;
