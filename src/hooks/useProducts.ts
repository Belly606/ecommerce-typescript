import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import {
  actGetProductsByCatPrefix,
  productsRecordsCleanUp,
} from "@store/products/productsSlice";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const productPrefix = params.prefix;
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  const productFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: wishlistItemsId.includes(el.id),
    isAuthenticated: userAccessToken ? true : false,
  }));

  useEffect(() => {
    const promise = dispatch(
      actGetProductsByCatPrefix(params.prefix as string)
    );

    return () => {
      dispatch(productsRecordsCleanUp());
      promise.abort();
    };
  }, [dispatch, params]);

  return { loading, error, productFullInfo, productPrefix };
};

export default useProducts;
