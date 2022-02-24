import styled from "styled-components";

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
