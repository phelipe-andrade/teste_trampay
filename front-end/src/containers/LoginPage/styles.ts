import styled, {css} from "styled-components";

export const Wrapper = styled.div`
   ${({theme}) => css`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto 0 auto;

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