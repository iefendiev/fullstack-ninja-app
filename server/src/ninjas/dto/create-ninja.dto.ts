import { MinLength, IsEnum } from 'class-validator';

export enum Belt {
  black = 'black',
  orange = 'orange',
  white = 'white',
}

export class CreateNinjaDto {
  dojoId: number;
  @MinLength(3)
  name: string;

  @IsEnum(Belt, {
    message: `Belt must be a valid color: ${Object.values(Belt).join(', ')}`,
  })
  belt: string;
}
