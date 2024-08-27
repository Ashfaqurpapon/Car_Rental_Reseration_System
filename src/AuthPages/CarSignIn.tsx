import { Button, Flex, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import PHForm from "../PHForm/PHForm";
import PHInput from "../PHForm/PHInput";
import { verifyToken } from "../redux/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { useCarLoginMutation } from "../redux/features/carAuthApi";
import { setCarUser, TUser } from "../redux/features/carAuthSlice";

const CarSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useCarLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log("Limon toekn");
      console.log(res.token);

      const user = verifyToken(res.token) as TUser;

      dispatch(setCarUser({ user: user, token: res.token }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      //// this

      navigate(`/${user.role}/dashboard`);
      console.log("successfully logged in");
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const signUpButtonPressed = () => {
    navigate(`/signUp`);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="email" label="Email" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
        <Flex>
          <h4>Create account here</h4>
          <Button onClick={signUpButtonPressed}>SignUP</Button>
        </Flex>
      </PHForm>
    </Row>
  );
};

export default CarSignIn;
