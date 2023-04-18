export interface IGroupedByCpf {
  [cpf: string]: {
    value: number;
    date_launch: string;
    cpf: string;
    registered_by: number;
  };
}