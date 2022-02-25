import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--grey-4);
  border-bottom: 1px var(--grey-3) solid;

  h1 {
    font-weight: 700;
    font-size: 18px;
  }

  span {
    font-size: 12px;
    font-weight: 600;
    color: var(--grey-1);
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    h1 {
      margin-left: 30px;
    }
    span {
      margin-left: 30px;
    }
  }
`;
