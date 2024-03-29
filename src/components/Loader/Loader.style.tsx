import styled, { keyframes } from "styled-components";
const spinner = keyframes`
    0%{
        top:50%;
        left:50%;
        width:0;
        height:0;
        opacity:1;
    }
    100%{
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        opacity:0
    }
`;
export const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;
export const LoaderWrapper = styled.div`
  position: relative;
  width: 100%;
  width: 200px;
  height: 200px;
  div {
    position: absolute;
    border: 4px solid #cef;
    opacity: 1;
    border-radius: 50%;
    animation: ${spinner} 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;
