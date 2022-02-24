import styled from "styled-components";

export const NavBar = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: var(--grey-3) 1px solid;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: var(--grey-4);

  svg {
    margin: 0px;
  }
  button {
    width: 50px;
    height: 23px;
    font-size: 9px;
    font-weight: 600;
    padding: 0px 16px 0px 16px;
    text-align: center;
  }
`;
