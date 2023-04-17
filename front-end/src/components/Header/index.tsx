import Link from 'next/link';
// import ArtIcon from '../../Assets/art.svg';
import * as Styled from './styles';
import ChangeTheme from '../ChangeTheme';

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Content>
        <Link href="/">
            LOGO
          {/* <ArtIcon arial-label="Arts Of The Wold"/> */}
        </Link>
        <div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/cvs">CSV</Link>
            <Link href="/user/login">Login</Link>
          </nav>
          <ChangeTheme/>
        </div>
      </Styled.Content>
    </Styled.Header>
  )
}