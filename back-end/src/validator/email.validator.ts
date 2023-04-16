import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraintInterface,
  ValidatorConstraint,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';
import { UserService } from 'src/services/user.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUniqueValidator implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate( email: string ): Promise<boolean> {
    if(!email) return false;
    return !(await this.userService.userAlreadyExists(email));
  }
}

export const EmailUnique = (opcoesDeValidacao: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: EmailUniqueValidator,
    });
  };
};

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailExistValidator implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate( email: string ): Promise<boolean> {   
    if(!email) return false;
    return !!(await this.userService.userAlreadyExists(email));
  }
}

export const EmailExist = (opcoesDeValidacao: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: EmailExistValidator,
    });
  };
};

