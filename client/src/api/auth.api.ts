import { useMutation } from '@tanstack/react-query';
import * as api from './api';

export const useLogin = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string }) =>
      api.post('/auth/login', body),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => api.get('/auth/logout'),
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string }) =>
      api.post('/auth/register', body),
  });
};
