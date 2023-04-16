import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { RegisterUserDTO } from 'src/dto/user/RegisterUserDTO';
import { AuthService } from './auth.service';
import { LoginUserDTO } from 'src/dto/user/LoginUserDTO';
import { TokenUserDTO } from 'src/dto/user/TokenUserDTO';
import { UpdateUserDTO } from 'src/dto/user/UpdateUserDTO';
import { ResponserUserDTO } from 'src/dto/user/ResponseUserDTO';
import { User } from '@prisma/client';
import { ExceptionMessage } from 'src/dto/message/ExceptionMessage';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async save(user: RegisterUserDTO): Promise<ResponserUserDTO> {
    const hashPassword = await this.authService.hashPassword(user.password);
    const userCreated = await this.prismaService.user.create({
      data: { ...user, password: hashPassword },
      select: { id: true, email: true, name: true },
    });
    return userCreated;
  }

  async getUser(id: number): Promise<ResponserUserDTO> {
    return await this.prismaService.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async token({ email, password }: LoginUserDTO): Promise<TokenUserDTO> {
    const user = await this.userAlreadyExists(email);
    if (!user) throw new ExceptionMessage('Usuário não existe');

    const userValid = await this.authService.validatePassword(
      password,
      user.password,
    );

    if (!userValid) throw new ExceptionMessage('Usuário ou senha inválido.');
    return this.authService.login(user.id);
  }

  async updateUser(id: number, user: Partial<UpdateUserDTO>) {
    const userExist = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!userExist) throw new ExceptionMessage('Usuário não encontrado');

    let hashPassword: string = userExist.password;
    if (user.password)
      hashPassword = await this.authService.hashPassword(user.password);

    return await this.prismaService.user.update({
      where: { id: userExist.id },
      data: { ...user, password: hashPassword },
      select: { id: true, email: true, name: true },
    });
  }

  async userAlreadyExists(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { email } });
  }
}
