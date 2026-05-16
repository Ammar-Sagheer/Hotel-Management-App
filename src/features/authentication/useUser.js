import { useQuery } from '@tanstack/react-query';
import { getcurrentUser } from '../../services/apiAuth';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getcurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === 'authenticated' };
}
