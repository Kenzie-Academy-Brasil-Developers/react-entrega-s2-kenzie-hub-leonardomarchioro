import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Container } from "./style.js";

const InputPassword = ({ label, register, name, error, ...rest }) => {
  const [type, setType] = useState("password");
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <Container>
      <label>{label}</label>
      <section>
        <input {...register(name)} {...rest} type={type} />
        <button onClick={showPassword} type="button">
          {type === "password" ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
      </section>
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};
export default InputPassword;
