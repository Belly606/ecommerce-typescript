import ContentLoader from "react-content-loader";
import { Row, Col } from "react-bootstrap";

const CategorySkeleton = () => {
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
          width={180}
          height={209}
          viewBox="0 0 180 209"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="80" cy="84" r="78" />
          <rect x="35" y="174" rx="4" ry="4" width="96" height="13" />
          <rect x="84" y="184" rx="0" ry="0" width="20" height="0" />
        </ContentLoader>
      </Col>
    ));

  return <Row>{renderSkeletons}</Row>;
};

export default CategorySkeleton;
