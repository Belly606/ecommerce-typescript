import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsRecordsCleanUp,
} from "@store/products/productsSlice";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";

const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { loading, error, records } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);

  const productFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: wishlistItemsId.includes(el.id),
  }));

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsRecordsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <>
      <Heading
        title={`${
          (params.prefix?.charAt(0).toUpperCase() as string) +
          params.prefix?.slice(1)
        } Products`}
      />
      <Loading status={loading} error={error}>
        <GridList
          records={productFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;
