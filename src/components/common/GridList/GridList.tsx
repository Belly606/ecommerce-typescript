import { Col, Row } from "react-bootstrap";

type TGridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};

type THasId = {
  id?: number;
};

const GridList = <T extends THasId>({
  records,
  renderItem,
}: TGridListProps<T>) => {
  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={6}
            key={record.id}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)}
          </Col>
        ))
      : "There are no categories";
  return <Row>{categoriesList}</Row>;
};

export default GridList;
