import Head from 'next/head';
import * as Styled from './styles';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Trampay - teste</title>
        <meta name="description" content="Trampay - teste" />
      </Head>
      <Styled.Content>
        <p>Bem-vindo</p>
        <Styled.Title>Trampay - Teste</Styled.Title>
        <div>
          <p>Acesse a plataform:</p>
          <Button onClick={() => router.push('/user/login')} text='Login'/>
          <Button onClick={() => router.push('/user/register')} text='Cadastre-se'/>
        </div>
      </Styled.Content>
    </>
  )
}