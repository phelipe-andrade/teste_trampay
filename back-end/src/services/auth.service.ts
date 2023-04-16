import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { TokenUserDTO } from 'src/dto/user/TokenUserDTO';

@Injectable()
export class AuthService {
  private readonly secretKey = process.env.JWT_SECRET || 'defaultSecret';

  async hashPassword(password: string): Promise<string> {   
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async validatePassword(
    password: string,
    hashPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }

  validateToken(token: string): number | undefined {
    let id: undefined | number;
    try {
      const validateToken = jwt.verify(token, this.secretKey) as jwt.JwtPayload;
      id = Number(validateToken.id);
    } catch (error) {
      id = undefined;
    }
   
    return id;
  }

  login(id: number): TokenUserDTO {
    const payload = { id };
    const accessToken = jwt.sign(payload, this.secretKey, { expiresIn: '1d' });
    return new TokenUserDTO(accessToken);
  }
}
