import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';

export function useCabins() {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
    onError: (err) => alert(err.message),
  });

  return { cabins, isLoading, error };
}
