import { Link} from "react-router-dom";
import Lottie from "lottie-react";
import notFound from "@assets/lotties/notFound.json";
import { Container } from "react-bootstrap";

const Error = () => {


  return (
    <Container className="notFound">
      <div className="d-flex flex-column align-items-center" style={{marginTop: "5%"}}>
      <Lottie animationData={notFound} style={{width: "400px"}}/>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
      </div>
    </Container>
  );
};

export default Error;
