import ContentLoader from "react-content-loader";
import { Row, Col } from "react-bootstrap";

const ProductSkeleton = () => {
  const renderSkeletons = Array(4)
    .fill(0)
    .map((_, idx) => (
      <Col
        key={idx}
        xs={6}
        md={3}
        className="d-flex justify-content-center mb-5 mt-2"
      >
        <ContentLoader
          speed={2}
          width={130}
          height={342}
          viewBox="0 0 130 342"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="84" y="184" rx="0" ry="0" width="20" height="0" />
          <rect x="0" y="0" rx="0" ry="0" width="130" height="150" />
          <rect x="0" y="159" rx="0" ry="0" width="130" height="20" />
          <rect x="0" y="188" rx="0" ry="0" width="130" height="24" />
          <rect x="0" y="228" rx="0" ry="0" width="80" height="16" />
          <rect x="5" y="252" rx="7" ry="7" width="120" height="24" />
        </ContentLoader>
      </Col>
    ));

  return <Row>{renderSkeletons}</Row>;
};

export default ProductSkeleton;
