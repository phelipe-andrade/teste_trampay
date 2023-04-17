import Head from 'next/head';
import * as Styled from './styles';
import Button from '@/components/Button';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Trampay - teste</title>
        <meta name="description" content="Trampay - teste" />
      </Head>
      <Styled.Content>
        <p>Bem-vindo</p>
        <h1>Trampay - Teste</h1>
        <div>
          <p>Acesse a plataform:</p>
          <Button link='/user/login' text='Login'/>
          <Button link='/user/register' text='Cadastre-se'/>
        </div>
      </Styled.Content>
    </>
  )
}