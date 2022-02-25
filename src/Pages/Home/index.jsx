import NavBarFixed from "../../Components/NavBar";
import Header from "../../Components/Header";
import { Body, ContainerAddTech } from "./style";
import Button from "../../Components/Button";
import { grey3, grey2 } from "../../styles/Global";
import ListTechs from "../../Components/ListTechs";
import { useState } from "react";
import ModalAddTech from "../../Components/ModalAddTech";
import ModalEdit from "../../Components/ModalEdit";
import { Redirect } from "react-router-dom";
import api from "../../Services/api";
import { toast } from "react-toastify";

const Home = ({ authentic, setAuthentic }) => {
  const [infosUser] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:infoUser")) || ""
  );
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:tokenUser")) || ""
  );
  const [techList, setTechList] = useState(infosUser.techs);
  const [addTech, setAddTech] = useState(false);
  const [editAct, setEditAct] = useState(false);
  const [cardEditNow, setCardEditNow] = useState();

  const addNewTech = () => {
    setAddTech(true);
  };

  const updateList = () => {
    api
      .get(`https://kenziehub.herokuapp.com/users/${infosUser.id}`)
      .then((res) => {
        setTechList(res.data.techs);
      });
  };

  const editTech = (id) => {
    const edit = techList.find((tech) => tech.id === id);
    setEditAct(true);
    setCardEditNow(edit);
  };

  if (!authentic) {
    return <Redirect to="/" />;
  }

  return (
    <Body>
      <NavBarFixed setAuthentic={setAuthentic} />
      <Header userName={infosUser.name} module={infosUser.course_module} />
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
          token={token}
          infosUser={infosUser}
          updateList={updateList}
        />
      )}
      {editAct && (
        <ModalEdit
          setEditAct={setEditAct}
          cardEditNow={cardEditNow}
          token={token}
          updateList={updateList}
        />
      )}
    </Body>
  );
};
export default Home;
