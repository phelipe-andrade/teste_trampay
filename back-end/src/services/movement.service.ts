import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { RegisterMovementDTO } from 'src/dto/movement/RegisterMovementDTO';
import { groupedByCpf } from 'src/helper/groupedByCpf';
import { MovementDTO } from 'src/dto/movement/MovementDTO';
import { MessageDTO } from 'src/dto/message/MessageDTO';

@Injectable()
export class MovementService {
  constructor(private readonly prismaService: PrismaService) {}

  async register(
    id: number,
    movements: RegisterMovementDTO[],
  ): Promise<MessageDTO> {
    const movementsByCpf = groupedByCpf(movements, id);

    Object.keys(movementsByCpf).forEach(async (cpf) => {
      await this.deleteMovementWithSameDay(cpf);
      await this.prismaService.movement.create({
        data: {
          ...movementsByCpf[cpf],
          created_at: new Date(),
        },
      });
    });
    return new MessageDTO(['CSV salvo com sucesso.']);
  }

  async listMoviments(deleted: boolean): Promise<MovementDTO[]> {
    const where = deleted
      ? { deleted_at: { not: null } }
      : { deleted_at: null };
    return await this.prismaService.movement.findMany({
      where,
    });
  }

  async deleteMovementWithSameDay(cpf: string): Promise<void> {
    const existingMovements = await this.prismaService.movement.findMany({
      where: {
        cpf,
        created_at: {
          gte: new Date(new Date().toJSON().split('T')[0]).toISOString(),
        },
        deleted_at: null,
      },
    });

    if (!existingMovements) return;
    for (const movement of existingMovements) {
      await this.prismaService.movement.update({
        where: { id: movement.id },
        data: { deleted_at: new Date() },
      });
    }
  }
}
