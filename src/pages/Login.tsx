import { useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "@validations/loginSchema";
import { Heading } from "@components/common";
import { Input } from "@components/forms";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

const Login = () => {
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
    console.log(data);
  };

  return (
    <>
      <Heading title="Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
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
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
