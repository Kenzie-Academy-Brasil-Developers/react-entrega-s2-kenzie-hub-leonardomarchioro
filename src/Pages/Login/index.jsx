import Button from "../../Components/Button";
import Input from "../../Components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    history.push("/home");
    console.log(data);
    toast.success("Login feito com successo!");
  };

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h3>Login</h3>
        <div>
          <Input
            label="Email"
            register={register}
            name="email"
            error={errors.email?.message}
            placeholder="exemplo@gmail.com"
            type="email"
          />
          <Input
            label="Senha"
            register={register}
            name="password"
            error={errors.password?.message}
            placeholder="sua senha"
            type="password"
          />
        </div>
        <Button text="Entrar" type="submit" />
        <div>
          <span>Ainda não possuí uma conta?</span>
        </div>
        <Button
          text="Cadastrar-se"
          type="button"
          onClick={() => history.push("/register")}
        />
      </form>
    </Container>
  );
};
export default Login;
