import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({theme}) => theme.colors.background};
  }

  h1, h2, li, p, a {
    color: ${({theme}) => theme.colors.text};
  }

`;

export const Title = styled.h1`
  ${({theme} )=> css`
    font-size: ${theme.font.sizes.xxLarge};
    line-height: ${theme.font.sizes.medium};
    margin: ${theme.spacings.large} 0;

    &::after {
      content: '';
      display: block;
      width: 30px;
      height: 5px;
      margin-top: 5px;
      background: ${theme.colors.primary};
      border-radius: 3px;
    }
  `}
`;

