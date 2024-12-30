import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, signInType } from "@validatons/signInSchema";
import { Input } from "@components/form";
import { Heading } from "@components/common";
import { Form, Button, Row, Col } from "react-bootstrap";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInType>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });

  const submitForm: SubmitHandler<signInType> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Heading title="User Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="Email address"
              name="email"
              register={register}
              error={errors.email?.message || ""}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message || ""}
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
