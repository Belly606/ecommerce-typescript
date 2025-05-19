import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthLogin, resetUI } from "@store/auth/authSlice";
import { useSearchParams, useNavigate, Navigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "@validations/loginSchema";
import { Heading } from "@components/common";
import { Input } from "@components/forms";
import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";

const Login = () => {
  const dispatch = useAppDispatch();

  const { loading, error, accessToken } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const submitForm: SubmitHandler<loginType> = (data) => {
    if (searchParams.get("message")) {
      setSearchParams("");
    }

    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Heading title="Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "login_required" && (
            <Alert variant="warning">
              You need to login to view this content
            </Alert>
          )}
          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created, please login
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="Email Address"
              name="email"
              register={register}
              error={errors.email?.message as string}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message as string}
            />

            <Button variant="info" type="submit" style={{ color: "white" }}>
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm" /> Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
