import { useQuery } from '@/src/hooks/useQuery';

export const useBase = () => {
  const { query } = useQuery<ExplorerBaseType>();

  return {
    query,
  };
};
