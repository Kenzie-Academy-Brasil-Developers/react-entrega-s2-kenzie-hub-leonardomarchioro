import NavBarFixed from "../../Components/NavBar";
import Header from "../../Components/Header";
import { Body, ContainerAddTech } from "./style";
import Button from "../../Components/Button";
import { grey3, grey2 } from "../../styles/Global";
import ListTechs from "../../Components/ListTechs";
import { useState } from "react";
import ModalAddTech from "../../Components/ModalAddTech";

const Home = () => {
  const [techList, setTechList] = useState([]);
  const [addTech, setAddTech] = useState(false);

  const addNewTech = () => {
    setAddTech(true);
  };

  return (
    <Body>
      <NavBarFixed />
      <Header userName={"Nome Teste"} module={"Módulo Teste"} />
      <main>
        <ContainerAddTech>
          <h2>Tecnologias</h2>
          <Button
            text="+"
            type="button"
            style={grey3}
            hover={grey2}
            onClick={addNewTech}
          />
        </ContainerAddTech>
        <ListTechs techList={techList} />
      </main>
      {addTech && (
        <ModalAddTech
          setAddTech={setAddTech}
          setTechList={setTechList}
          techList={techList}
        />
      )}
    </Body>
  );
};
export default Home;
