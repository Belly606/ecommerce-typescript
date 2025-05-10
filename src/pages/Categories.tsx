import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCategories,
  categoriesRecordsCleanUp,
} from "@store/categories/categoriesSlice";
import { GridList, Heading } from "@components/common";
import Category from "@components/eCommerce/Category/Category";
import { Loading } from "@components/feedback";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(actGetCategories());

    return () => {
      dispatch(categoriesRecordsCleanUp());
    };
  }, [dispatch]);

  return (
    <>
      <Heading title="Categories" />
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
};

export default Categories;
