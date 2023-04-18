import Link from "next/link";
import * as Styled from './styles';

interface IButton {
  text: string;
  onClick: any;
  loading?: boolean;
}

export default function Button({text, onClick, loading = false}: IButton) {
  return (
    <>
      {
        loading ? 
        <Styled.Button
          disabled
        >
          Carregando...
        </Styled.Button>
        :
        <Styled.Button
        onClick={onClick}
        >
          {text}
        </Styled.Button>
        }
    </>
  )
}