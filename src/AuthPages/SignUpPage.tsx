import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCarSignUpMutation } from "../redux/features/carAuthApi";
import PHForm from "../PHForm/PHForm";
import PHInput from "../PHForm/PHInput";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [signUp] = useCarSignUpMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Signing in");

    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        role: "user", // role can be user or admin
        password: data.password,
        phone: data.phoneNo,
        address: "123444 Main St, City, Country",
      };

      const res = await signUp(userInfo);
      console.log("Limon");
      console.log(res);

      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/carSignIn`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="name" label="Name" />
        <PHInput type="text" name="email" label="Email" />
        <PHInput type="text" name="password" label="Password" />
        <PHInput type="text" name="ConfirmPassword" label="Confirm Password" />
        <PHInput type="text" name="phoneNo" label="Phone Number" />
        <Button htmlType="submit">SignUp</Button>
      </PHForm>
    </Row>
  );
};

export default SignUpPage;
