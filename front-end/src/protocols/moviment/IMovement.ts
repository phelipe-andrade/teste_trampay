export interface IMovement {
    id: number;
    value: number;
    cpf: string;
    date_launch: string;
    registered_by: number;
    created_at: Date;
    deleted_at: Date | null;
}