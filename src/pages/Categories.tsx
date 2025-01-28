import useCategories from "@hooks/useCategories";
import { GridList, Heading } from "@components/common";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { Container } from "react-bootstrap";

const Categories = () => {
  const { loading, error, records } = useCategories();

  return (
    <Container>
      <Heading title="Categories" />
      <Loading status={loading} error={error} type="category">
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
