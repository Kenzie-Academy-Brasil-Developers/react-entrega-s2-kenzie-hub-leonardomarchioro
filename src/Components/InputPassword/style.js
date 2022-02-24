import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 0px 10px 0px;

  label {
    width: 100%;
    text-align: initial;
    padding-left: 8px;
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 22px;
  }

  section {
    display: flex;
  }

  input {
    width: 329px;
    height: 48px;
    border-radius: 4px;
    border: transparent;
    padding: 0px 16px 0 16px;
    position: relative;
    left: 6px;
    background-color: var(--grey-2);
    color: var(--grey-0);
  }

  input &::placeholder {
    color: #868e96;
  }

  input:focus {
    border: 1px solid #f8f9fa;
    color: var(--grey-0);
  }

  input:focus::-webkit-input-placeholder {
    color: var(--grey-0);
  }

  button {
    background-color: transparent;
    border: transparent;
    position: relative;
    right: 20px;
  }

  button svg {
    color: var(--grey-0);
  }

  div {
    width: 100%;
    padding: 7px;
    height: 25px;
    color: var(--grey-1);
    font-size: 12px;
    font-weight: 600;
  }
`;
