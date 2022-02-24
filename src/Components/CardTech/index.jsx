import { ContainerCard } from "./style";

const CardTech = ({ id, nameTech, levelTech, editTech }) => {
  return (
    <ContainerCard id={id} onClick={() => editTech(id)}>
      <h1>{nameTech}</h1>
      <span>{levelTech}</span>
    </ContainerCard>
  );
};
export default CardTech;
