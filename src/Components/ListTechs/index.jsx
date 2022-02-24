import CardTech from "../CardTech";
import { SvgFake, ContainerListCards } from "./style";

const ListTechs = ({ techList, editTech }) => {
  return (
    <section>
      {techList.length > 0 ? (
        <ContainerListCards>
          {techList.map((tech, index) => {
            return (
              <CardTech
                key={index}
                id={tech.id}
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
