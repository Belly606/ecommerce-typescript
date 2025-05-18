import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerType } from "@validations/registerSchema";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { Heading } from "@components/common";
import { Input } from "@components/forms";
import { Form, Button, Row, Col } from "react-bootstrap";

const Register = () => {
  const {
    register,
    handleSubmit,
    trigger,
    getFieldState,
    formState: { errors },
  } = useForm<registerType>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const {
    enteredEmail,
    emailAvailabilityStatus,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const submitForm: SubmitHandler<registerType> = (data) => {
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

    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  return (
    <>
      <Heading title="Registration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name"
              name="firstName"
              register={register}
              error={errors.firstName?.message as string}
            />

            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName?.message as string}
            />

            <Input
              label="Email Address"
              name="email"
              register={register}
              onBlur={emailOnBlurHandler}
              error={
                errors.email?.message
                  ? errors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : !emailAvailabilityStatus
                  ? "We'll never share your email with anyone else."
                  : ""
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
              error={errors.password?.message as string}
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              register={register}
              error={errors.confirmPassword?.message as string}
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
