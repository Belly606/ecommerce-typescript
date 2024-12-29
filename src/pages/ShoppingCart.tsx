import useShoppingCart from "@hooks/useShoppingCart";
import { Heading } from "@components/common";
import { CartItemList, ShoppingCartSubtotalPrice } from "@components/eCommerce";
import { Loading, LottieHandler } from "@components/feedback";

const ShoppingCart = () => {
  const { loading, error, products, changeQuantityHandler, removeItemHandler } =
    useShoppingCart();

  return (
    <>
      <Heading title="Your Shopping Cart" />
      <Loading status={loading} error={error} type="cart">
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <ShoppingCartSubtotalPrice products={products} />
          </>
        ) : (
          <LottieHandler type="cartEmpty" message="Your Cart is empty" />
        )}
      </Loading>
    </>
  );
};

export default ShoppingCart;
