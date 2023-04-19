import * as Styled from './styles'
import { IMovement } from '@/protocols/moviment/IMovement';


export default function ListMovement({movements, headers}: {movements: IMovement[], headers: string[]}) {  
  return (
    <>
      <Styled.Table>
        <thead>
          <tr>
            {
              headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          { movements.map((movement, index) => (
            <tr key={index + movement.value}>
              <td>{movement.id}</td>
              <td>{movement.cpf}</td>
              <td>{movement.value}</td>
              <td>{movement.date_launch}</td>
              <td>{new Date(movement.created_at).toLocaleDateString()}</td>
              <td>{movement.registered_by}</td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </>
  )
}