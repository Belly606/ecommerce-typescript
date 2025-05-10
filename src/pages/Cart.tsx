import useCart from "@hooks/useCart";
import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading } from "@components/feedback";

const Cart = () => {
  const { loading, error, products, changeQuantityHandler, removeItemHandler } =
    useCart();

  return (
    <>
      <Heading title="Your Cart" />
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
