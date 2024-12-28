import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  productsFullInfoCleanUp,
} from "@store/wishlist/wishlistSlice";
import { Product } from "@components/eCommerce";
import { GridList, Heading } from "@components/common";
import { Container } from "react-bootstrap";
import { Loading } from "@components/feedback/";

const Wishlist = () => {
  const dispatch = useAppDispatch();

  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(productsFullInfoCleanUp());
    };
  }, [dispatch]);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: true,
  }));

  return (
    <>
      <Container>
        <Heading>Your Wishlist</Heading>
        <Loading status={loading} error={error}>
          <GridList
            records={records}
            renderItem={(record) => <Product {...record} />}
          />
        </Loading>
      </Container>
    </>
  );
};

export default Wishlist;
