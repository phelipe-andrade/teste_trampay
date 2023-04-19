import { USER_RECOVER } from "@/api";
import Button from "@/components/Button";
import Error from "@/components/Error";
import Input from "@/components/Input";
import useFetch from "@/helper/useFetch";
import { IMessage } from "@/protocols/IMessage";
import { IUserRecover } from "@/protocols/user/IUserRevocer";
import { messageApp } from "@/store/message";
import { emailResetPassword } from "@/store/user";
import * as Global from '@/styles/global-styles';
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";


export default function PasswordPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<IUserRecover>({
    email: ''
  })

  const { loading, error, request } = useFetch<IMessage>();
  async function handleSubmit(event: MouseEvent<HTMLButtonElement, MouseEvent>){
    event.preventDefault();
    const {url, options} = USER_RECOVER(email)
    const {response, json} = await request(url, options);
    if(response && response.ok){      
      dispatch(emailResetPassword({email: email.email}));
      dispatch(messageApp(json.message));
      router.push("/user/password/reset")
    };
  };

  return (
    <Global.Form>
      <Global.Title>Recuperar Senha</Global.Title>
      <form>
        <Input 
        placeholder="trampay@gmail.com" 
        label="E-MAIL" 
        type="text" 
        id="email" 
        onBlur={() => {}} 
        onChange={(value: string) => setEmail({email: value})} 
        value={email.email}/>
        <Button onClick={handleSubmit} text="Enviar" loading={loading}/>
        {error.value && <Error message={error.message}/>}
      </form>
    </Global.Form>
  )
}