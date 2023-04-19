import styled, { css } from "styled-components";

export const Button = styled.button`
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
