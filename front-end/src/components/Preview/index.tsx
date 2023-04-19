import { IRegisterMovement } from '@/protocols/moviment/IResgisterMovement';
import * as Styled from './styles'

export default function Preview({movements}: {movements: IRegisterMovement[]}) {  
  return (
    <>
      <Styled.Table>
        <thead>
          <tr>
            <th>Data de Lançamento</th>
            <th>Documento(CPF)</th>
            <th>Valor(R$)</th>
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