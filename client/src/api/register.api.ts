import * as api from './api';

// TODO migrate to react-query useMutations
export const register = async (body: { email: string; password: string }) =>
  api.post('/auth/register', body);
