import Link from 'next/link';
import Head from 'next/head';
import * as Global from '../../styles/global-styles';
import * as Styled from './styles';

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
          <Link href='/user/login'>
            <Global.Button>
              Login 
            </Global.Button>
          </Link>
          <Link href='/user/register'>
            <Global.Button>
              Cadastre-se
            </Global.Button>
          </Link>
        </div>
      </Styled.Content>
    </>
  )
}