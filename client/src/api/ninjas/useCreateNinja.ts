import { useMutation } from '@tanstack/react-query';
import * as api from '../api';
import { NinjaProps } from '@/types';

export interface CreateNinjaPayload extends Omit<NinjaProps, 'id'> {
  dojoId: number;
}

export const useCreateNinja = () => {
  return useMutation({
    mutationFn: (ninja: CreateNinjaPayload) => api.post('/ninjas', ninja),
  });
};
