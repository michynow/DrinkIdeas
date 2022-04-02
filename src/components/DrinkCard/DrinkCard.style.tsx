import { Link } from "react-router-dom";
import styled from "styled-components";
interface LinkAttrs {
  to: string;
  key: number | string;
}
export const DrinkCardWrapper = styled(Link)`
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  margin: 2rem auto;
  overflow: hidden;
  padding: 1rem;
  color: inherit;
  box-shadow: 5px 5px 26px 5px rgba(15, 15, 15, 0.05);
  transition: 0.3s transform ease-out;
  &:hover {
    transform: scale(1.015);
  }
`;
export const DrinkName = styled.h2`
  letter-spacing: 0.5px;
`;
export const DrinkImage = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 5px;
`;
export const DrinkInstructions = styled.p`
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
