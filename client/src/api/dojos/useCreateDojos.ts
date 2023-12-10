import { useMutation } from '@tanstack/react-query';
import * as api from '../api';

export const useCreateDojo = () => {
  return useMutation({
    mutationFn: (dojo: { name: string }) => api.post('/dojos', dojo),
  });
};
