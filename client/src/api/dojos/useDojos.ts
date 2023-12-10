import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { DojoProps } from '@/types';

export const useDojos = () =>
  useQuery<DojoProps[]>({
    queryKey: ['dojos'],
    queryFn: () => api.get('/dojos'),
  });
