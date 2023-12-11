import { BeltOptions } from './types';

export const ROUTES = {
  DASHBOARD: '/dashboard',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
};

export const BELT_OPTIONS: { label: string; value: BeltOptions }[] = [
  { label: 'Black', value: BeltOptions.BLACK },
  { label: 'Orange', value: BeltOptions.ORANGE },
  { label: 'White', value: BeltOptions.WHITE },
  { label: 'Red', value: BeltOptions.RED },
];
