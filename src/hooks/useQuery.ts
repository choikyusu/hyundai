import { useRouter } from 'next/router';

export function useQuery<T>() {
  const router = useRouter();

  const query = router.query as T;

  return {
    query,
  };
}
