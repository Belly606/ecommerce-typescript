<<<<<<< HEAD
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Container } from "react-bootstrap";

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to="/" replace={true}>
        How about going back to safety?
=======
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Error = () => {
  return (
    <Container className="notFound">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" replace={true}>
        Looks like you've reached a non-existent page. <br /> How about going
        back to safety?
>>>>>>> 91afda99e3f3e430ef8350864146a9419990cccf
      </Link>
    </Container>
  );
};

export default Error;
