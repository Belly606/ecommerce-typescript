import { Container } from "react-bootstrap";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let status: number;
  let statusText: string;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    statusText = error.statusText;
  } else {
    status = 404;
    statusText = "Page Not Found";
  }

  return (
    <Container className="notFound">
      <h1>{status}</h1>
      <p>{statusText}</p>
      <Link to={"/"} replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
