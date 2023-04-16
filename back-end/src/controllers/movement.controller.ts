import { Body, Controller, Get, Post, Put, Request } from '@nestjs/common';
import { ExceptionMessage } from 'src/dto/message/ExceptionMessage';
import { RegisterMovementArrayDTO } from 'src/dto/movement/RegisterMovementDTO';
import { CustomRequest } from 'src/protocols/CustomRequest';
import { MovementService } from 'src/services/movement.service';

@Controller('/movement')
export class MovementController {
  constructor(private readonly movementService: MovementService) {}

  @Post()
  async register(
    @Request() req: CustomRequest,
    @Body() { movements }: RegisterMovementArrayDTO,
  ) {
    if (req.id) return await this.movementService.register(req.id, movements);
    throw new ExceptionMessage('Id do usuário não encontrado');
  }
}
