import Link from "next/link";
import * as Styled from './styles';

interface IButton {
  link: string;
  text: string;
}

export default function Button({link, text}: IButton) {
  return (
    <>
      <Link href={link}>
        <Styled.Button>
          {text}
        </Styled.Button>
      </Link>
    </>
  )
}