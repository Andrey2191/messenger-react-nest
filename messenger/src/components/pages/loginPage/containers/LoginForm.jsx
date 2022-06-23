import { useDispatch } from "react-redux";
import { FormAuth } from "./Form";
import { login } from "./loginSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = async (email, password) => {
    const resultAction = await dispatch(login({ email, password }));

    if (login.fulfilled.match(resultAction)) {
      console.log("login fulfilled");
    } else {
      alert("Пользователь не найден!");
    }
  };

  return (
    <div>
      <FormAuth title="Войти" handleClick={handleLogin} />
    </div>
  );
};

export default LoginForm;
