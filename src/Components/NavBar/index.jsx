import Logo from "../../assets/logo";
import Button from "../Button";
import { grey3, grey2 } from "../../styles/Global";
import { useHistory } from "react-router-dom";
import { NavBar } from "./style";

const NavBarFixed = () => {
  const history = useHistory();

  return (
    <>
      <NavBar>
        <Logo />
        <Button
          text="Sair"
          type="button"
          style={grey3}
          hover={grey2}
          onClick={() => {
            history.push("/");
          }}
        />
      </NavBar>
    </>
  );
};
export default NavBarFixed;
