import { Navigate } from "react-router-dom";
import useLogin from "@hooks/useLogin";
import { Input } from "@components/form";
import { Heading } from "@components/common";
import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";

const Login = () => {
  const {
    loading,
    error,
    accessToken,
    formErrors,
    searchParams,
    submitForm,
    register,
    handleSubmit,
  } = useLogin();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Heading title="User Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "login_required" && (
            <Alert variant="danger">You need to login to view this page</Alert>
          )}
          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created, please login
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="Email address"
              name="email"
              register={register}
              error={formErrors.email?.message || ""}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              error={formErrors.password?.message || ""}
            />
            <Button variant="info" type="submit" style={{ color: "white" }}>
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner> Loding...
                </>
              ) : (
                "Login"
              )}
            </Button>
            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
