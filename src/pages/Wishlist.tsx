import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetWishlist } from "@store/wishlist/wishlistSlice";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: true,
  }));
  useEffect(() => {
    dispatch(actGetWishlist());
  }, [dispatch]);
  return (
    <>
      <Heading>Your Wishlist</Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;
