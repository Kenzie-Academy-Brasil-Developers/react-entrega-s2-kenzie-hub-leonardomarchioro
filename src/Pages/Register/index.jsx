import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import InputPassword from "../../Components/InputPassword";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import { Container, ContainerButton } from "./styles";
import { toast } from "react-toastify";
import { colorPrimary, primary50, grey3, grey2 } from "../../styles/Global";
import Logo from "../../assets/logo";
import api from "../../Services/api";

const Register = ({ authentic }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[ a-zA-Z á]*$/, "Deve conter apenas letras"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Deve conter ao menos 8 caracteres, uma letra minuscula, uma maiúscula, um número e um carácter especial"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
    module: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = ({ name, email, password, module }) => {
    const register = {
      name,
      email,
      password,
      course_module: module,
      bio: "not",
      contact: "not",
    };

    api
      .post("/users", register)
      .then((_) => {
        toast.success("Cadastro feito com successo!");
        history.push("/");
      })
      .catch((err) => toast.error("Email já existente, tente outra vez"));
  };

  if (authentic) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <header>
        <div>
          <Logo />
        </div>
        <Button
          text="Voltar"
          type="button"
          style={grey3}
          hover={grey2}
          onClick={() => history.push("/")}
        />
      </header>
      <form onSubmit={handleSubmit(handleLogin)}>
        <header>
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
        </header>
        <Input
          label="Nome"
          register={register}
          name="name"
          error={errors.name?.message}
          placeholder="Digite aqui seu nome"
          type="name"
        />
        <Input
          label="Email"
          register={register}
          name="email"
          error={errors.email?.message}
          placeholder="Digite aqui seu email"
          type="email"
        />
        <InputPassword
          label="Senha"
          register={register}
          name="password"
          error={errors.password?.message}
          placeholder="Digite aqui sua senha"
          type="password"
        />
        <InputPassword
          label="Confirmar senha"
          register={register}
          name="confirmPassword"
          error={errors.confirmPassword?.message}
          placeholder="Confirme aqui sua senha"
          type="password"
        />
        <Select register={register} name="module" />
        <ContainerButton>
          <Button
            text="Cadastrar"
            type="submit"
            style={colorPrimary}
            hover={primary50}
          />
        </ContainerButton>
      </form>
    </Container>
  );
};
export default Register;
