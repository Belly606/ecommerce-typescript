import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  wishlistProductsFullInfoCleanUp,
} from "@store/wishlist/wishlistSlice";

const useWishlist = () => {
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
    return () => {
      dispatch(wishlistProductsFullInfoCleanUp());
    };
  }, [dispatch]);

  return { loading, error, records };
};

export default useWishlist;
