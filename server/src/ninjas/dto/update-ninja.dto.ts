import { IsEnum, MinLength } from 'class-validator';
import { Belt } from './create-ninja.dto';

export class UpdateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(Belt, {
    message: `Belt must be a valid color: ${Object.values(Belt).join(', ')}`,
  })
  belt: string;
}
