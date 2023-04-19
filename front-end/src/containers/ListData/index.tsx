import { GET_LIST_MOVEMENT } from "@/api";
import Button from "@/components/Button";
import { getLocalStorage } from "@/helper/localStorage";
import useFetch from "@/helper/useFetch";
import { IMovement } from "@/protocols/moviment/IMovement";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import * as Styled from  './styles';
import ListMovement from "@/components/ListMovement";
import * as Global from '@/styles/global-styles';


export default function ListData() {
  const router = useRouter();
  const {loading, request} = useFetch<IMovement[]>();
  const [listMovement, setListMovement] = useState<IMovement[]>([]);

  useEffect(() => {
    (async () => {
      const token = getLocalStorage('token') as string;
      const {url, options} = GET_LIST_MOVEMENT(token)
      const {response, json} = await request(url, options);
      if(response && response.ok) setListMovement(json);
    })();
  }, [request]);


  if(loading) return <div>carregando...</div>;

  return (
    <Styled.Wrapper>
      {
        listMovement.length > 0 &&
        <>
          <Global.Title>Lista</Global.Title>
          <ListMovement headers={['ID', 'CPF', 'Valor', 'Data de registro', 'Criado em', 'Registrado por(ID)']} movements={listMovement}/>
        </>
      }
      <Button text="Adicionar CSV" onClick={() => router.push('/csv/register')}/>
    </Styled.Wrapper>
  )
}