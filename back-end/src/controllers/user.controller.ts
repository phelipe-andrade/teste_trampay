import { Body, Controller, Get, Post, Put, Request } from '@nestjs/common';
import { ExceptionMessage } from 'src/dto/message/ExceptionMessage';
import { LoginUserDTO } from 'src/dto/user/LoginUserDTO';
import { RegisterUserDTO } from 'src/dto/user/RegisterUserDTO';
import { ResponserUserDTO } from 'src/dto/user/ResponseUserDTO';
import { UpdateUserDTO } from 'src/dto/user/UpdateUserDTO';
import { CustomRequest } from 'src/protocols/CustomRequest';
import { UserService } from 'src/services/user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(@Body() dataUser: RegisterUserDTO) {
    return await this.userService.save(dataUser);
  }

  @Post('/login')
  async login(@Body() dataUser: LoginUserDTO) {
    return await this.userService.token(dataUser);
  }

  @Get()
  async user(@Request() req: CustomRequest): Promise<ResponserUserDTO | null> {
    if (req.id) return await this.userService.getUser(req.id);
    throw new ExceptionMessage('Id do usuário não encontrado');
  }

  @Put()
  async update(@Request() req: CustomRequest, @Body() dataUser: UpdateUserDTO) {
    if (req.id) return await this.userService.updateUser(req.id, dataUser);
    throw new ExceptionMessage('Id do usuário não encontrado');
  }
}
