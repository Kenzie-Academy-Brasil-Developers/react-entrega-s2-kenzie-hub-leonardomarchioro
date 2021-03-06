import Button from "../../Components/Button";
import Input from "../../Components/Input";
import InputPassword from "../../Components/InputPassword";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { colorPrimary, grey1, primary50, grey2 } from "../../styles/Global";
import Logo from "../../assets/logo";
import api from "../../Services/api";

const Login = ({ authentic, setAuthentic }) => {
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
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@Kenziehub:tokenUser", JSON.stringify(token));
        localStorage.setItem("@Kenziehub:infoUser", JSON.stringify(user));
        toast.success("Login feito com successo!");
        setAuthentic(true);
        return history.push("/home");
      })
      .catch(() => toast.error("Email ou senha incorretos"));
  };

  if (authentic) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleSubmit(handleLogin)}>
        <h3>Login</h3>
        <div>
          <Input
            label="Email"
            register={register}
            name="email"
            error={errors.email?.message}
            placeholder="exemplo@email.com"
            type="email"
          />
          <InputPassword
            label="Senha"
            register={register}
            name="password"
            error={errors.password?.message}
            placeholder="sua senha"
            type="password"
          />
        </div>
        <Button
          text="Entrar"
          type="submit"
          style={colorPrimary}
          hover={primary50}
        />

        <span>Ainda não possuí uma conta?</span>

        <Button
          text="Cadastrar-se"
          type="button"
          style={grey1}
          hover={grey2}
          onClick={() => history.push("/register")}
        />
      </form>
    </Container>
  );
};
export default Login;
