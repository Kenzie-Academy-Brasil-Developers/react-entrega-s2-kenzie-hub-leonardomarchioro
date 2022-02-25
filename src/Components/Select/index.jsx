import { ContainerSelect, Label } from "./styles";

const Select = ({ register, name }) => {
  return (
    <div>
      <Label>Selecionar módulo</Label>
      <ContainerSelect>
        <select name="Selecionar módulo" {...register(name)}>
          <option value={"Primeiro módulo (Introdução ao Frontend)"}>
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value={"Segundo módulo (Frontend Avançado)"}>
            Segundo módulo (Frontend Avançado)
          </option>
          <option value={"Terceiro módulo (Introdução ao Backend)"}>
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value={"Quarto módulo (Backend Avançado)"}>
            Quarto módulo (Backend Avançado)
          </option>
        </select>
      </ContainerSelect>
    </div>
  );
};
export default Select;
