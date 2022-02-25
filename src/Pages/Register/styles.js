import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 33px;
    width: 370px;
    justify-content: space-between;
  }
  header div svg {
    margin: 0px;
    width: 122px;
    height: 16px;
  }
  header button {
    width: 67px;
    height: 32px;
    font-size: 12px;
    font-weight: 600;
  }
  form {
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 42px 22px;
    border-radius: 4px;
    height: 760px;
    width: 370px;
  }
  form header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 14px;
  }
  form header h3 {
    margin-bottom: 22px;
    font-size: 18px;
    font-weight: 700;
  }
  form header p {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-1);
  }
  form div div {
    height: auto;
  }
  form div {
    margin: 0px;
  }

  @media (max-width: 430px) {
    form {
      width: 300px;
    }
  }
`;

export const ContainerButton = styled.section`
  margin-top: 22px;

  @media (max-width: 430px) {
    button {
      width: 270px;
    }
  }
`;
