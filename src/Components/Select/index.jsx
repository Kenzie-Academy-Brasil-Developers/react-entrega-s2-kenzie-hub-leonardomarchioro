const Select = ({ register, name }) => {
  return (
    <div>
      <select name="Selecionar módulo" {...register(name)}>
        <option value={"M1"}>Primeiro módulo</option>
        <option value={"M2"}>Segundo módulo</option>
        <option value={"M3"}>Terceiro módulo</option>
        <option value={"M4"}>Quarto módulo</option>
        <option value={"M5"}>Quinto módulo</option>
        <option value={"M6"}>Sexto módulo</option>
      </select>
    </div>
  );
};
export default Select;
