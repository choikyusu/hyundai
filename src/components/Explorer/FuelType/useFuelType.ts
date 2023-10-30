import { useRouter } from 'next/router';
import { useState } from 'react';

export const useFuelType = () => {
  const router = useRouter();

  const { fuelType, budgetRange, bodyType } = router.query as {
    fuelType: string | undefined;
    budgetRange: string | undefined;
    bodyType: string | undefined;
  };

  const [list, setList] = useState<string[]>(
    fuelType ? fuelType?.split(',') : [],
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

  return { onChange, budgetRange, bodyType, list };
};
