import { useMutation } from '@tanstack/react-query';
import * as api from '../api';
import { NinjaProps } from '@/types';

type NinjaPayload = Omit<NinjaProps, 'id'>;

export const useCreateNinja = () => {
  return useMutation({
    mutationFn: (ninja: NinjaPayload) => api.post('/ninjas', ninja),
  });
};
