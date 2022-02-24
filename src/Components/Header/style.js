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
`;
