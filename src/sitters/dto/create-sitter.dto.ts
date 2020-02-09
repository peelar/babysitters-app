import { IsNotEmpty } from 'class-validator';

export class CreateSitterDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;
}
