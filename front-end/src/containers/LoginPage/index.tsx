import Input from "@/components/Input";
import { useState } from "react";

export interface IUserLogin {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [userLogin, setUserLogin] = useState<IUserLogin>({
    email: '',
    password: ''
  });


  return (
    <div>
      {/* <h1>Login</h1> */}
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
        label="E-MAIL" 
        type="password" 
        id="email" 
        error={false} 
        onBlur={() => {}} 
        onChange={(value: string) => setUserLogin({...userLogin, password: value})} 
        value={userLogin.password}/>
        
      </form>
    </div>
  )
}