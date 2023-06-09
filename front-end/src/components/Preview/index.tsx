import { IRegisterMovement } from '@/protocols/moviment/IResgisterMovement';
import * as Styled from './styles'


export default function Preview({movements, headers}: {movements: IRegisterMovement[], headers: string[]}) {  
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
              <td>{movement.date_launch}</td>
              <td>{movement.cpf}</td>
              <td>{movement.value}</td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </>
  )
}