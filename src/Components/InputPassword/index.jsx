import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { Container } from "./style.js";

const InputPassword = ({ label, register, name, error, ...rest }) => {
  const [type, setType] = useState("password");
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <Container>
      <label>{label}</label>
      <input {...register(name)} {...rest} type={type} />
      <button onClick={showPassword} type="button">
        <BiShow />
      </button>
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};
export default InputPassword;
