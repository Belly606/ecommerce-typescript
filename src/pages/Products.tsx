import useProducts from "@hooks/useProducts";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { Container } from "react-bootstrap";

const Products = () => {
  const { loading, error, productFullInfo, productPrefix } = useProducts();
  return (
    <Container>
      <Heading
        title={`${productPrefix?.charAt(0).toUpperCase()}${productPrefix?.slice(
          1
        )}`}
      />
      <Loading status={loading} error={error} type="product">
        <GridList
          records={productFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
