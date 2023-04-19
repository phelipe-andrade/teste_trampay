import { GET_LIST_MOVEMENT } from "@/api";
import Button from "@/components/Button";
import Movement from "@/components/Movement";
import { getLocalStorage } from "@/helper/localStorage";
import useFetch from "@/helper/useFetch";
import { IMovement } from "@/protocols/moviment/IMovement";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function ListData() {
  const router = useRouter();
  const {loading, error, request} = useFetch<IMovement[]>();
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
    <div>
      <Button text="Adicionar CSV" onClick={() => router.push('/csv/register')}/>
      <ul>
      {
        listMovement.map((movement) => (
          <Movement key={movement.id} movement={movement}/>
        ))
      }
    </ul>
    </div>
  )
}