import * as api from './api';

export const register = async (body: { email: string; password: string }) =>
  api.post('/auth/register', body);
