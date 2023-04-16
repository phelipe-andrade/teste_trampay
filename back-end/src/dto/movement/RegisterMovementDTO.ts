import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, ValidateNested, IsArray } from 'class-validator';

export class RegisterMovementDTO {
  @IsNotEmpty({ message: "Campo 'value' não pode ser vazio." })
  @IsNumber(undefined, { message: 'O valor deve ser um número' })
  value: number;

  @IsNotEmpty({ message: "Campo 'cpf' não pode ser vazio." })
  cpf: string;

  @IsNotEmpty({ message: "Campo 'date_launch' não pode ser vazio." })
  date_launch: string;
}

export class RegisterMovementArrayDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RegisterMovementDTO)
  movements: RegisterMovementDTO[];
}
