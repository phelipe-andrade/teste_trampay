import { IMovement } from "@/protocols/moviment/IMovement";

export default function Movement({movement}: {movement: IMovement}) {
  const {cpf, created_at, date_launch, deleted_at, id,registered_by, value} = movement;
  return (
    <>
      <p>ID: <span>{id}</span></p>
      <p>CPF: <span>{cpf}</span></p>
      <p>Valor: <span>{value}</span></p>
      <p>Data de registro: <span>{date_launch}</span></p>
      <p>Criado em: <span>{new Date(created_at).toDateString()}</span></p>
      {
        deleted_at && <p>Deletado em: <span>{new Date(deleted_at).toDateString()}</span></p>
      }
      <p>Registrado por: <span>{registered_by}</span></p>
    </>
  )
}