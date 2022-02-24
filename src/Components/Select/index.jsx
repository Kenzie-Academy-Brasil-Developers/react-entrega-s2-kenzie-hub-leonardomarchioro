import { ContainerSelect, Label } from "./styles";

const Select = ({ register, name }) => {
  return (
    <div>
      <Label>Selecionar módulo</Label>
      <ContainerSelect>
        <select name="Selecionar módulo" {...register(name)}>
          <option value={"Primeiro módulo"}>Primeiro módulo</option>
          <option value={"Segundo módulo"}>Segundo módulo</option>
          <option value={"Terceiro módulo"}>Terceiro módulo</option>
          <option value={"Quarto módulo"}>Quarto módulo</option>
          <option value={"Quinto módulo"}>Quinto módulo</option>
          <option value={"Sexto módulo"}>Sexto módulo</option>
        </select>
      </ContainerSelect>
    </div>
  );
};
export default Select;
