import { RegisterMovementDTO } from "src/dto/movement/RegisterMovementDTO";
import { IGroupedByCpf } from "src/protocols/IGrounpedByCpf";

export function groupedByCpf(movements: RegisterMovementDTO[], id: number): IGroupedByCpf {
  const groupedByCpf: IGroupedByCpf = {};

  movements.forEach((movement) => {
    if (!groupedByCpf[movement.cpf]) {
      groupedByCpf[movement.cpf] = {
        value: movement.value,
        date_launch: movement.date_launch,
        cpf: movement.cpf,
        registered_by: id
      };
    } else {
      groupedByCpf[movement.cpf].value += movement.value;
    }
  });

  return groupedByCpf;
}