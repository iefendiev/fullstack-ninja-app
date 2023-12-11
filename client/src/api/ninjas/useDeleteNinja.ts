import { MutationOptions, useMutation } from '@tanstack/react-query';
import * as api from '../api';

export const useDeleteNinja = (
  id: number,
  mutationOptions: MutationOptions
) => {
  return useMutation({
    mutationFn: () => api.del(`/ninjas/${id}`),
    ...mutationOptions,
  });
};
