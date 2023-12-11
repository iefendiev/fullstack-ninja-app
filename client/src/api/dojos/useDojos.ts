import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { Dojo } from '@/types';

export const useDojos = () =>
  useQuery<Dojo[]>({
    queryKey: ['dojos'],
    queryFn: () => api.get('/dojos'),
  });
