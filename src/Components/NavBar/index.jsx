import Logo from "../../assets/logo";
import Button from "../Button";
import { grey3, grey2 } from "../../styles/Global";
import { useHistory } from "react-router-dom";
import { NavBar } from "./style";

const NavBarFixed = ({ setAuthentic }) => {
  const history = useHistory();

  const handleLogout = () => {
    setAuthentic(false);
    return localStorage.clear();
  };

  return (
    <>
      <NavBar>
        <Logo />
        <Button
          text="Sair"
          type="button"
          style={grey3}
          hover={grey2}
          onClick={handleLogout}
        />
      </NavBar>
    </>
  );
};
export default NavBarFixed;
