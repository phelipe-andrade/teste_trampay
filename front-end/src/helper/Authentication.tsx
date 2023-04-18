import { ChildProps } from "@/protocols/ChildProps";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage } from "./localStorage";
import { GET_USER } from "@/api";
import useFetch from "./useFetch";
import { loginUser } from "@/store/user";
import { useRouter } from "next/router";
import { useState } from "react";
import { IUserValidLogin } from "@/protocols/user/IUserLogin";

export default function Authentication({children}: ChildProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, request} = useFetch();
  const { login } = useSelector((state: IUserValidLogin) => state.user);
  const token = getLocalStorage('token');

  const [isValid, setIsValid] = useState(false);

  async function validToken() {
    if(!token) return;
    const {url, options} = GET_USER(token);
    const {response} = await request(url, options);    
    if(response && response.ok) {
      setIsValid(true);
      dispatch(loginUser({login: true}));
    } else router.push("/user/login");  
  }

  if (loading) return <p>carregando</p>

  if(login) return <>{children}</>;

  if(token) validToken();
  else if (typeof window !== 'undefined') router.push("/user/login");
  
  return isValid || login ? <>{children}</> : <p>Usuário sem acesso.</p>;
}