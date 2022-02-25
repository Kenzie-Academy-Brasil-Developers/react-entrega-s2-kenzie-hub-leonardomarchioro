import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
    border-radius: 4px;
    height: 502px;
    width: 369px;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
  span {
    color: var(--grey-1);
    font-size: 12px;
    font-weight: 600;
    margin: 34px 0px 22px 0px;
  }

  @media (max-width: 430px) {
    form {
      width: 300px;
      height: 520px;
    }
    button {
      width: 270px;
    }
    form div {
      width: 270px;
    }
  }
`;
