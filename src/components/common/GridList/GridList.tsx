import { LottieHandler } from "@components/feedback";
import { Col, Row } from "react-bootstrap";

type TGridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  emptyMessage: string;
};

type THasId = {
  id?: number;
};

const GridList = <T extends THasId>({
  emptyMessage,
  records,
  renderItem,
}: TGridListProps<T>) => {
  const categoriesList =
    records.length > 0 ? (
      records.map((record) => (
        <Col
          xs={6}
          key={record.id}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <Col>
        <LottieHandler type="cartEmpty" message={emptyMessage} />
      </Col>
    );
  return <Row>{categoriesList}</Row>;
};

export default GridList;
