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

export const Form = styled.div`
   ${({theme}) => css`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${theme.spacings.xLarge} auto;

    & form {
      margin-bottom: ${theme.spacings.medium};
    }

    & button {
      width: 100%;
      margin: 0;
    }

    & p {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.text};
      
      & a {
        color: ${theme.colors.primary};
        font-weight: ${theme.font.weight.semiBold};
        margin-left: 5px;
      }
    }

    & span {

      margin: ${theme.spacings.xSmall} 0px;

      &::after, &::before {
        content: '';
        width: 35px;
        height: 1px;
        background: ${theme.colors.text};
        display: inline-block;
        margin: 0 5px 3px 5px;

      }
    }
  `}
`
