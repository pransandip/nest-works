import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto implements Readonly<CreateUserDto> {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
