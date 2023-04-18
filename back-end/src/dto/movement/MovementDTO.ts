export class MovementDTO {
  id: number;
  value: number;
  cpf: string;
  registered_by: number;
  created_at: Date;
  deleted_at: Date | null;
}