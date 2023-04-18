import Button from "@/components/Button";
import Input from "@/components/Input";
import * as Global from '@/styles/global-styles';
import { MouseEvent, useState } from "react";
import { IResetPassword, IResetPasswordForm } from "@/protocols/password/IResetPassword";
import Error from "@/components/Error";
import useFetch from "@/helper/useFetch";
import { RESET_PASSWORD } from "@/api";
import { IMessage } from "@/protocols/IMessage";
import { IToken } from "@/protocols/IToken";
import { setLocalStorage } from "@/helper/localStorage";
import { useRouter } from "next/router";

export default function ResetPage() {
  const router = useRouter();
  const [resetPassword, setResetPassword] = useState<IResetPasswordForm>({
    email: '',
    password: '',
    password_new: '',
    password_repeat: ''
  })
  const [errorPassword, setErrorPassword] = useState<boolean>(false);

  const { loading, error, request } = useFetch<IToken>();
  async function handleSubmit(event: MouseEvent<HTMLButtonElement, MouseEvent>){
    event.preventDefault();
    
    const {email, password, password_new, password_repeat} = resetPassword;
    if(password_new != password_repeat) {
      setErrorPassword(true)
      return;
    } else setErrorPassword(false)

    const {url, options} = RESET_PASSWORD({
      email,
      old_password: password,
      new_password: password_new
    })
    const {response, json} = await request(url, options);

    if(response && response.ok) {
      setLocalStorage('token', json.token); 
      router.push("/csv");
    } 
  };

  return (
    <Global.Form>
      <Global.Title>Nova Senha</Global.Title>
      <form>
        <Input 
        placeholder="trampay@gmail.com" 
        label="E-MAIL" 
        type="text" 
        id="email" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setResetPassword({...resetPassword, email: value})} 
        value={resetPassword.email}/>

        <Input 
        placeholder="*********" 
        label="Senha" 
        type="password" 
        id="password" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setResetPassword({...resetPassword, password: value})} 
        value={resetPassword.password}/>

        <Input 
        placeholder="*********" 
        label="Nova Senha" 
        type="password" 
        id="password_repeat" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setResetPassword({...resetPassword, password_new: value})} 
        value={resetPassword.password_new}/>

        <Input 
        placeholder="*********" 
        label="Repita a Senha" 
        type="password" 
        id="password_repeat" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setResetPassword({...resetPassword, password_repeat: value})} 
        value={resetPassword.password_repeat}/>
        <Button onClick={handleSubmit} text="Cadastrar" loading={loading}/>
        {error.value && <Error message={error.message}/>}
        {errorPassword && <Error message={"As senhas precisão ser iguais."}/>}
      </form>
    </Global.Form>
  )
}