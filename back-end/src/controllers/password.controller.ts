import { Body, Controller, Post, Put } from '@nestjs/common';
import { ResetPasswordDTO } from 'src/dto/password/ResetPasswordDTO';
import { UpdatePasswordDTO } from 'src/dto/password/UpdatePassword.DTO';
import { TokenUserDTO } from 'src/dto/user/TokenUserDTO';
import { PasswordService } from 'src/services/password.service';

@Controller('/password')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post()
  async resetPassword(@Body() dataUser: ResetPasswordDTO) {
    return await this.passwordService.resetPassword(dataUser);
  }

  @Put()
  async updatePassword(@Body() dataUser: UpdatePasswordDTO): Promise<TokenUserDTO> {
    return await this.passwordService.updatePassword(dataUser);
  }
}
