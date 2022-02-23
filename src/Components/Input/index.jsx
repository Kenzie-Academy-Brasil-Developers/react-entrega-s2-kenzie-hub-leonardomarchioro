import { ContainerInput } from "./style";

const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <ContainerInput>
      <label>{label}</label>
      <input {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </ContainerInput>
  );
};
export default Input;
