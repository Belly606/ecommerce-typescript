import useProducts from "@hooks/useProducts";
import { Product } from "@components/eCommerce";
import { GridList, Heading } from "@components/common";
import { Container } from "react-bootstrap";
import { Loading } from "@components/feedback/";

const Products = () => {
  const { loading, error, productFullInfo, productPrefix } = useProducts();

  return (
    <Container>
      <Heading title={`${productPrefix} Products`} />
      <Loading status={loading} error={error} type="product">
        <GridList
          emptyMessage="There is no products"
          records={productFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
