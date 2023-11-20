import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: 'TOP SECRET, SHOW ME THE MONEY $$$',
};

export const IS_PUBLIC_KEY = 'isPublic';
// Custom decorator to mark routes as public
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
