import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${({theme}) => css`
      border: 1px solid ${theme.colors.secundary};
      display: inline-block;
      padding: ${theme.spacings.large};
      background: ${theme.colors.background};
      position: absolute;
      top: 10%;
      left: 20px;
      box-shadow: ${theme.box.shadow};
      border-radius: 3px;

      &.active {
        display: block;
        animation: upDown 0.3s forwards;
      }


      @keyframes upDown {
        from {
          transform: translate3d(0, -10px, 0);
          opacity: 0;
        }

        to {
          transform: translate3d(0, 10px ,0);
          opacity: 1;
        }
      }
  `}
`

export const Close = styled.span`
    ${({theme}) => css`
      display: inline-block;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${theme.colors.secundary};
      border:none;
      border-radius: 3px;
      position: absolute;
      top: -10px;
      right: -10px;
      box-shadow: ${theme.box.shadow};
      cursor: pointer;
      color: ${theme.colors.primary};

      &:hover {
        color: #fff;
        background: red;
      }
  `}
`