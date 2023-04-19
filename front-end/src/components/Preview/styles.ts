import styled, { css } from "styled-components";

export const Table = styled.table`
    ${({theme}) => css`
    border-collapse: collapse;
    width: 600px;
    column-gap: 20px;
    border-spacing: 0 10px;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacings.medium} ;

    & th {
      color: ${theme.colors.secundary} ;
    }

    & tr {
      border-bottom: 1px solid ${theme.colors.primary};
    }
  `}
`;
