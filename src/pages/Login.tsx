import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, TLoginType } from "@validations/loginSchema";
import { Input } from "@forms/index";
import { Heading } from "@components/common";
import { Form, Button, Row, Col } from "react-bootstrap";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginType>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const submitForm: SubmitHandler<TLoginType> = (data) => console.log(data);

  return (
    <>
      <Heading title="User Login" />
      <Row>
        <Col md={{ span: "6", offset: "3" }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="Email address"
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

            <Button
              className="mb-3"
              variant="info"
              type="submit"
              style={{ color: "white" }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
