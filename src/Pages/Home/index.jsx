import NavBarFixed from "../../Components/NavBar";
import Header from "../../Components/Header";
import { Body, ContainerAddTech } from "./style";
import Button from "../../Components/Button";
import { grey3, grey2 } from "../../styles/Global";
import ListTechs from "../../Components/ListTechs";
import { useState } from "react";
import ModalAddTech from "../../Components/ModalAddTech";
import ModalEdit from "../../Components/ModalEdit";

const Home = () => {
  const [techList, setTechList] = useState([]);
  const [addTech, setAddTech] = useState(false);
  const [editAct, setEditAct] = useState(false);
  const [idCard, setIdCard] = useState(0);
  const [cardEditNow, setCardEditNow] = useState();

  const addNewTech = () => {
    setAddTech(true);
  };

  const editTech = (id) => {
    const edit = techList.find((tech) => tech.id === id);
    setEditAct(true);
    setCardEditNow(edit);
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
        <ListTechs techList={techList} editTech={editTech} />
      </main>
      {addTech && (
        <ModalAddTech
          setAddTech={setAddTech}
          setTechList={setTechList}
          techList={techList}
          setIdCard={setIdCard}
          idCard={idCard}
        />
      )}
      {editAct && (
        <ModalEdit
          setEditAct={setEditAct}
          setTechList={setTechList}
          techList={techList}
          cardEditNow={cardEditNow}
          setIdCard={setIdCard}
          idCard={idCard}
        />
      )}
    </Body>
  );
};
export default Home;
