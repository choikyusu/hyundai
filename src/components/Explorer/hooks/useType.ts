import { useRouter } from 'next/router';
import { useState } from 'react';

interface useFuelTypeProps {
  type: 'bodyType' | 'fuelType' | 'budgetRange' | 'passenger' | 'luggage';
}

export const useType = ({ type }: useFuelTypeProps) => {
  const router = useRouter();

  const query = router.query as {
    fuelType: string | undefined;
    budgetRange: string | undefined;
    bodyType: string | undefined;
    passenger: string | undefined;
    luggage: string | undefined;
  };

  const [list, setList] = useState<string[]>(
    (!!query[type] && query[type]?.split(',')) || [],
  );

  const onChange = (value: string) => {
    if (list.includes(value)) {
      const updatedList = list.filter(item => item !== value);
      setList(updatedList);
    } else {
      const updatedList = [...list, value];
      setList(updatedList);
    }
  };

  return {
    onChange,
    budgetRange: query.budgetRange || '',
    bodyType: query.bodyType || '',
    fuelType: query.fuelType || '',
    passenger: query.passenger || '',
    list,
  };
};
