import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
     margin: ${theme.spacings.xLarge} auto;
     text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
  `}
`;