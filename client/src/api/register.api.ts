import * as api from './api';

export const register = async (body: { email: string; password: string }) => {
  try {
    const response = await api.post('/auth/register', body);
  } catch (error) {
    console.log(error);
  }
};
