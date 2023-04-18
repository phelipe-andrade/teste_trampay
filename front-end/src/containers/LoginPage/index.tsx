import { useState, MouseEvent, useEffect } from "react"; 
import Button from "@/components/Button";
import Input from "@/components/Input";
import * as Global from '@/styles/global-styles';
import Link from "next/link";
import { IUserLogin, IUserValidLogin } from "@/protocols/user/IUserLogin";
import { USER_LOGIN } from "@/api";
import useFetch from '@/helper/useFetch';
import { IToken } from "@/protocols/IToken";
import Error from "@/components/Error";
import { deleteLocalStorage, setLocalStorage } from "@/helper/localStorage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "@/store/user";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { login } = useSelector((state: IUserValidLogin) => state.user);  
  const [userLogin, setUserLogin] = useState<IUserLogin>({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (login) router.push("/csv")
  }, [login, router])

  const { loading, error, request } = useFetch<IToken>();
  async function handleSubmit(event: MouseEvent<HTMLButtonElement, MouseEvent>){
    event.preventDefault();
    const {url, options} = USER_LOGIN(userLogin)
    const {response, json} = await request(url, options);
    if(response && response.ok) {
      setLocalStorage('token', json.token); 
      dispatch(loginUser({login: true}));
    } 
  };

  return (
    <Global.Form>
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
        <Button onClick={handleSubmit} text="Login" loading={loading}/>
        {error.value && <Error message={error.message}/>}
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
        <Link href='/user/password'
        onClick={() => deleteLocalStorage('token')}
        >
          Recuperar
        </Link>
      </p>
      
    </Global.Form>
  )
}