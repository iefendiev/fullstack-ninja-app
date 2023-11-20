import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { NinjaProps } from '@/types';

export const useNinjas = () =>
  useQuery<NinjaProps[]>({
    queryKey: ['ninjas'],
    queryFn: () => api.get('/ninjas'),
  });
