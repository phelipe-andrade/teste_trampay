import Button from '@/components/Button';
import Input from '@/components/Input';
import * as Global from '@/styles/global-styles';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { IUserRegister, IUserRegisterForm } from '@/protocols/user/IUserRegister';
import { USER_REGISTER } from '@/api';
import { useRouter } from 'next/router';
import useFetch from '@/helper/useFetch';
import { IUser } from '@/protocols/user/IUser';
import Error from '@/components/Error';

export default function RegisterPage() {
  const router = useRouter();
  const [registerUser, setRegisterUser] = useState<IUserRegisterForm>({
    email: '',
    name: '',
    password: '',
    password_repeat: ''
  });

  const [errorPassword, setErrorPassword] = useState<boolean>(false);

  const { loading, error, request } = useFetch<IUser>();

  async function handleSubmit(event: MouseEvent<HTMLButtonElement, MouseEvent>){
    event.preventDefault();
    const {password, password_repeat, email, name} = registerUser;

    if(password != password_repeat) {
      setErrorPassword(true)
      return;
    } else setErrorPassword(false)
    
    const {url, options} = USER_REGISTER({ password, email, name });
    const {response} = await request(url, options);

    // Adicionar mensagem aqui
    if(response && response.ok) router.push("/user/login");
  };


  return (
    <Global.Form>
      <Global.Title>Cadastre-se</Global.Title>
      <form>
      <Input 
        placeholder="Trampay Teste" 
        label="Nome" 
        type="text" 
        id="name" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setRegisterUser({...registerUser, name: value})} 
        value={registerUser.name}/>

        <Input 
        placeholder="trampay@gmail.com" 
        label="E-MAIL" 
        type="text" 
        id="email" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setRegisterUser({...registerUser, email: value})} 
        value={registerUser.email}/>

        <Input 
        placeholder="*********" 
        label="Senha" 
        type="password" 
        id="password" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setRegisterUser({...registerUser, password: value})} 
        value={registerUser.password}/>

        <Input 
        placeholder="*********" 
        label="Repita a Senha" 
        type="password" 
        id="password_repeat" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setRegisterUser({...registerUser, password_repeat: value})} 
        value={registerUser.password_repeat}/>
        <Button onClick={handleSubmit} text="Cadastrar"  loading={loading}/>
        {error.value && <Error message={error.message}/>}
        {errorPassword && <Error message={"As senhas precisão ser iguais."}/>}
      </form>

      <p>
        Já tem cadastro? 
        <Link href='/user/login'>
          Login
        </Link>
      </p>
    </Global.Form>
  )
}