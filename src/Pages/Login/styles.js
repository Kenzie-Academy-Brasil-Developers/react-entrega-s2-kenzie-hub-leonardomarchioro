import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--color-primary);
    margin-bottom: 35px;
  }
  form {
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-radius: 4px;
    height: 500px;
    width: 300px;
  }
  div {
    margin: 8px 0px;
  }
`;
