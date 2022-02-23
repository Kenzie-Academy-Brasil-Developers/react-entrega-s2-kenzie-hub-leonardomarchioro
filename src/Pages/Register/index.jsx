import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import InputPassword from "../../Components/InputPassword";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import { toast } from "react-toastify";

const Register = () => {
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

  const handleLogin = (data) => {
    history.push("/");
    console.log(data);
    toast.success("Cadastro feito com successo!");
  };

  return (
    <Container>
      <div>
        <h1>Kenzie Hub</h1>
        <Button text="Voltar" type="button" onClick={() => history.push("/")} />
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
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
        <Button text="Cadastrar" type="submit" />
      </form>
    </Container>
  );
};
export default Register;
