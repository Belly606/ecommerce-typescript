import useCart from "@hooks/useCart";
import { Heading } from "../components/common/index";
import { Loading } from "@components/feedback";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";

const Cart = () => {
  const { loading, error, products, changeQuantityHandler, removeItemHandler } =
    useCart();

  return (
    <>
      <Heading title="Cart" />
      <Loading status={loading} error={error} type="cart">
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice products={products} />
          </>
        ) : (
          "Your Cart is Empty"
        )}
      </Loading>
    </>
  );
};

export default Cart;
