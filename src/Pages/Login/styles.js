import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* svg {
    width: 145px;
    height: 20px;
    margin-bottom: 35px;
  } */
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
  }
`;
