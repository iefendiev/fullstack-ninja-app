import * as api from './api';

export const login = async (body: { email: string; password: string }) =>
  api.post('/auth/login', body);

export const logout = async () => api.get('/auth/logout');
