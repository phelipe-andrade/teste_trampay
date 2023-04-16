import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { ResetPasswordDTO } from 'src/dto/password/ResetPasswordDTO';
import { AuthService } from './auth.service';
import { RegisterMovementDTO } from 'src/dto/movement/RegisterMovementDTO';

@Injectable()
export class MovementService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async register(id: number, moviments: RegisterMovementDTO[]) {
    console.log(moviments);
  }
}
