import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10vh 0;
  height: 100%;
`;

export const InputCsv = styled.div`
  ${({theme} )=> css`

  & p {
    margin: ${theme.spacings.medium} 0;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text};
  
    & span {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.semiBold};
      color: ${theme.colors.secundary};
      
    }
  }

  & input {
    display: none;
  }
  `}
`;


export const Label = styled.label`
   ${({theme}) => css`
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.bold};
      letter-spacing: 1px;
      border: 1px solid #23e971;
      border-radius: 3px;
      padding: ${theme.spacings.small} ${theme.spacings.large};
      margin: ${theme.spacings.small};
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      
      &:hover{
        box-shadow: ${theme.box.shadow};
      }
  `}
`;