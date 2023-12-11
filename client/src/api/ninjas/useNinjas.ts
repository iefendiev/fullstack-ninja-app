import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { Ninja } from '@/types';

export const useNinjas = () =>
  useQuery<Ninja[]>({
    queryKey: ['ninjas'],
    queryFn: () => api.get('/ninjas'),
  });
