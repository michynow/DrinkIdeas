import styled from "styled-components";
export const StyledSelectedIngredientWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  min-height: 2.5rem;
  span {
    background-color: dodgerblue;
    color: white;
    padding: 0.3rem 1.5rem 0.3rem 1rem;
    border-radius: 1.5rem;
    font-weight: 500;
    margin-right: 0.5rem;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    margin-bottom: 0.5rem;
    button {
      cursor: inherit;
      height: 100%;
      width: 10px;
      background-color: transparent;
      border: none;
      color: white;
      position: absolute;
      right: 10px;
      top: 0;
      display: grid;
      place-items: center;
      pointer-events: none;
    }
  }
`;
