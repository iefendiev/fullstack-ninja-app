import { Ninja } from '@/types';
import { useMutation } from '@tanstack/react-query';
import * as api from '../api';

export interface UpdateNinjaPayload extends Omit<Ninja, 'id'> {
  dojoId: number;
}

export const useUpdateNinja = () => {
  return useMutation({
    mutationFn: (ninja: UpdateNinjaPayload) => api.put('/ninjas', ninja),
  });
};
