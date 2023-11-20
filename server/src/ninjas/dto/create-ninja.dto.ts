import { MinLength, IsEnum } from 'class-validator';

enum Belt {
  black = 'black',
  orange = 'orange',
  white = 'white',
}

export class CreateNinjaDto {
  id: string;
  @MinLength(3)
  name: string;

  @IsEnum(Belt, {
    message: `Belt must be a valid color: ${Object.values(Belt).join(', ')}`,
  })
  belt: string;
}
