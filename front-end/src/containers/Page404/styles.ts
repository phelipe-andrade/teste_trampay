import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate3d(-50%, -50%, 0);
     white-space: nowrap;
  `}
`;