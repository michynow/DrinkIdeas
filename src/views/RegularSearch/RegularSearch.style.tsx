import styled from "styled-components";

export const RegularSearchFormWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const RegularSearchForm = styled.form`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;
export const RegularSearchFormInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 0;
  border: 3px solid #e6e6e6;
  outline: none;
  padding: 0.5rem;
  font-size: 1.5rem;
`;
export const RegularSearchFormButton = styled.button`
  border: none;
  background-color: dodgerblue;
  color: white;
  font-weight: bold;
  height: calc(36px + 1rem);
  font-size: 1rem;
  padding: 1rem 0;
  display: grid;
  place-items: center;
  flex: 0 0 15%;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    filter: brightness(0.9);
  }
`;
export const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
