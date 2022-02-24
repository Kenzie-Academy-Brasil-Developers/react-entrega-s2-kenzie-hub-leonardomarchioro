import CardTech from "../CardTech";
import { SvgFake, ContainerListCards } from "./style";

const ListTechs = ({ techList }) => {
  const editTech = (id) => {
    console.log(id);
    const edit = techList.find((tech, index) => index == id);
    console.log(edit);
    console.log(techList);
  };

  return (
    <section>
      {techList.length > 0 ? (
        <ContainerListCards>
          {techList.map((tech, index) => {
            return (
              <CardTech
                key={index}
                id={index}
                nameTech={tech.name}
                levelTech={tech.level}
                editTech={editTech}
              />
            );
          })}
        </ContainerListCards>
      ) : (
        <SvgFake>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </SvgFake>
      )}
    </section>
  );
};
export default ListTechs;
