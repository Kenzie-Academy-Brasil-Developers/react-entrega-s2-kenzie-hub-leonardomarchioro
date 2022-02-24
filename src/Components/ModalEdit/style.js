import styled from "styled-components";

export const ContainerModal = styled.section`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
`;

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  padding: 0px;
  width: 350px;
  height: 400px;
  border-radius: 4px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-2);
    width: 100%;
    height: 50px;
    border-radius: 4px 4px 0px 0px;
    padding: 0px 20px;
  }
  h2 {
    font-size: 14px;
    font-weight: 700;
  }
  header button {
    background-color: transparent;
    width: 12px;
    height: 26px;
    color: var(--grey-1);
  }
  form {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form div {
    margin: 0px;
    padding: 22px 0px 10px 0px;
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerSelect = styled.section`
  background-color: var(--grey-2);
  width: 329px;
  height: 48px;
  border-radius: 4px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;

  &:focus-within {
    border: 1px solid var(--grey-0);
  }

  select {
    width: 320px;
    height: 48px;
    padding: 0px 16px 0px 16px;
    border-radius: 4px;
    border: transparent;

    background-color: var(--grey-2);
    color: #868e96;
  }
  select:focus {
    color: var(--grey-0);
  }
`;
export const Label = styled.label`
  width: 100%;
  text-align: initial;
  padding-left: 8px;
  font-size: 12px;
  font-weight: 400;
`;
export const ContainerButtons = styled.section`
  width: 100%;
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    width: 100%;
    justify-content: space-around;
  }

  section button {
    width: 204px;
  }
  section div {
    padding: 0px;
  }
  section div button {
    width: 98px;
  }
`;
