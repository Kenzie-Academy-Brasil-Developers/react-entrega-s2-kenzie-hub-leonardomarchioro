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
                nameTech={tech.title}
                levelTech={tech.status}
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
