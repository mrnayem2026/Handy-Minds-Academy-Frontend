import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import verifyToken from "../utils/verifyToken";

const LoginPage = () => {
  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });



  const onSubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken)
    dispatch(setUser({ user: user, token: res.data.accessToken }))

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="userId"
          className="border-2"
          {...register("userId")}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          className="border-2"
          {...register("password")}
        />
      </div>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default LoginPage;
