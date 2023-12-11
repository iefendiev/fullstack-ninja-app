import { useMutation } from '@tanstack/react-query';
import * as api from '../api';
import { Ninja } from '@/types';

export interface CreateNinjaPayload extends Omit<Ninja, 'id'> {
  dojoId: number;
}

export const useCreateNinja = () => {
  return useMutation({
    mutationFn: (ninja: CreateNinjaPayload) => api.post('/ninjas', ninja),
  });
};
