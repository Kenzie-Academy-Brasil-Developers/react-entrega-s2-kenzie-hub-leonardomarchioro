import { ContainerHeader } from "./style";

const Header = ({ userName, module }) => {
  return (
    <ContainerHeader>
      <h1>Olá, {userName}</h1>
      <span>{module}</span>
    </ContainerHeader>
  );
};

export default Header;
