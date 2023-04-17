import styled, {css} from "styled-components";

export const Wrapper = styled.div`
   ${({theme}) => css`
    border: 1px solid ${theme.colors.primary};
    border-radius: 3px;
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};
    width: 300px;
  `}
`

export const Input = styled.input`
  ${({theme}) => css`
    padding: 0.6875rem 1rem;
    height: 48px;
    width: 100%;
    background: none;
    outline: none;
    border: none;
  `}
`;

export const Label = styled.label`
  ${({theme}) => css`
    position: absolute;
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
    left: ${theme.spacings.medium};
    top: -18%;
    background: ${theme.colors.background};
    padding: 0 4px;
    line-height: 18px;
    cursor: pointer;
  `}
`

export const Error = styled.p`
  ${({theme}) => css`
    position: absolute;
    text-align: left;
    color: red;
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.medium};
  `}
`