import { Ninja } from '@/types';
import { useMutation } from '@tanstack/react-query';
import * as api from '../api';

export const useUpdateNinja = () => {
  return useMutation({
    mutationFn: ({ id, ...rest }: Ninja) => api.put(`/ninjas/${id}`, rest),
  });
};
