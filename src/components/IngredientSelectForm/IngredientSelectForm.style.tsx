import styled from "styled-components";
export const StyledIngredientSelectForm = styled.form.attrs(() => ({
  action: "GET",
}))`
  max-height: calc(100vh - 20px);
  height: 100%;
  overflow: auto;
  position: sticky;
  top: 0;
  min-width: 25%;
  button {
    position: sticky;
    bottom: 0;
    width: 100%;
    left: 0;
    min-height: 3rem;
    border: none;
    cursor: pointer;
  }
  input {
    display: none;
  }
  div:nth-child(even) {
    background-color: #f5f5f5;
  }
  div.selected {
    background-color: dodgerblue;
    label {
      color: white;
      font-weight: 700;
    }
  }
  label {
    display: block;
    padding: 0.3rem 1rem;
  }
`;
