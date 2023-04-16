export class MessageDTO {
  constructor(
    private readonly message: string[],
    private readonly statusCode: number = 200,
  ){}
}