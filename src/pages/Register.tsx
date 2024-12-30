import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signupType } from "@validatons/signUpSchema";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { Input } from "@components/form";
import { Heading } from "@components/common";
import { Form, Button, Row, Col } from "react-bootstrap";

const Register = () => {
  const {
    register,
    handleSubmit,
    trigger,
    getFieldState,
    formState: { errors },
  } = useForm<signupType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const submitForm: SubmitHandler<signupType> = (data) => {
    console.log(data);
  };

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && enteredEmail !== value) {
      // Checking
      checkEmailAvailability(value);
    }

    if (isDirty && !invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  return (
    <>
      <Heading title="User Registeration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name"
              name="firstName"
              register={register}
              error={errors.firstName?.message || ""}
            />
            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName?.message || ""}
            />
            <Input
              label="Email address"
              name="email"
              register={register}
              onBlur={emailOnBlurHandler}
              error={
                errors.email?.message
                  ? errors.email?.message || ""
                  : emailAvailabilityStatus === "unavailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking" ? "Checking..." : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use."
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking" ? true : false}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message || ""}
            />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              register={register}
              error={errors.confirmPassword?.message || ""}
            />
            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={emailAvailabilityStatus === "checking" ? true : false}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
