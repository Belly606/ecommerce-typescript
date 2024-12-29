import { LottieHandler } from "@components/feedback";
import { Row, Col } from "react-bootstrap";

type TGridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  emptyMessage: string;
};
type THasId = { id?: number };

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
          md={3}
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <LottieHandler type="wishlistEmpty" message={emptyMessage} />
    );

  return <Row>{categoriesList}</Row>;
};

export default GridList;
