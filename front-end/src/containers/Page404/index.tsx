import * as Global from '@/styles/global-styles';
import * as Styled from './styles';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

export default function Page404() {
  const router = useRouter();
  return (
    <Styled.Wrapper>
      <Global.Title>404 - Página não encontrada</Global.Title>
      <Button text='Home' onClick={() => router.push('/')}/>
    </Styled.Wrapper>
  )
}