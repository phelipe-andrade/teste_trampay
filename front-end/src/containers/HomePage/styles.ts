import styled, {css} from "styled-components";

export const Title = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.secundary} ;
  `}
`

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh;
  height: 100%;
`;