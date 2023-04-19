import Link from 'next/link';
// import ArtIcon from '../../Assets/art.svg';
import * as Styled from './styles';
import ChangeTheme from '../ChangeTheme';
import { IUserValidLogin } from '@/protocols/user/IUserLogin';
import { useSelector, useDispatch } from 'react-redux';
import { deleteLocalStorage } from '@/helper/localStorage';
import { loginUser } from '@/store/user';

export default function Header() {
  const dispatch = useDispatch();
  const { login } = useSelector((state: IUserValidLogin) => state.user); 

  function handleLogout() {
    deleteLocalStorage('token');
    dispatch(loginUser({login: false}));
  }

  return (
    <Styled.Header>
      <Styled.Content>
        <Link href="/">
            <Styled.Logo>Trampay - Teste</Styled.Logo>
        </Link>
        <div>
          <nav>
            <Link href="/">Home</Link>
            {
              login ?
              <>
                <Link href="/csv">CSV</Link>
                <Link onClick={handleLogout} href="/user/login">Logout</Link>
              </>
              :
              <Link href="/user/login">Login</Link>
            }
            
          </nav>
          <ChangeTheme/>
        </div>
      </Styled.Content>
    </Styled.Header>
  )
}