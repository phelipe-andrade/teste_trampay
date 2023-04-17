import { useState } from "react"; 
import Button from "@/components/Button";
import Input from "@/components/Input";
import * as Styled from './styles';
import * as Global from '@/styles/global-styles';
import Link from "next/link";
import { IUserLogin } from "@/protocols/IUserLogin";

export default function LoginPage() {
  const [userLogin, setUserLogin] = useState<IUserLogin>({
    email: '',
    password: ''
  });


  return (
    <Styled.Wrapper>
      <Global.Title>Login</Global.Title>
      <form>
        <Input 
        placeholder="trampay@gmail.com" 
        label="E-MAIL" 
        type="text" 
        id="email" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setUserLogin({...userLogin, email: value})} 
        value={userLogin.email}/>

        <Input 
        placeholder="*********" 
        label="Senha" 
        type="password" 
        id="password" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setUserLogin({...userLogin, password: value})} 
        value={userLogin.password}/>
        <Button link="/csv" text="Login"/>
      </form>

      <p>
        Novo por aqui?  
        <Link href='/user/register'>
          Cadastre-se
        </Link>
      </p>
      <span>ou</span>  
      <p>
        Esqueceu a senha? 
        <Link href='/user/password'>
          Recuperar
        </Link>
      </p>
    </Styled.Wrapper>
  )
}