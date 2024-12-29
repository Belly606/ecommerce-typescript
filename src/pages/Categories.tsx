import useCategories from "@hooks/useCategories";
import { GridList, Heading } from "@components/common";
import { Category } from "@components/eCommerce";
import { Container } from "react-bootstrap";
import { Loading } from "@components/feedback";

const Categories = () => {
  const { loading, error, records } = useCategories();

  return (
    <Container>
      <Heading title="Categories" />
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
