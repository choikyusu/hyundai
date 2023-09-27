import { useCallback, useRef } from 'react';

interface UseMultiRangeSliderProps {
  minIndex: number;
  maxIndex: number;
  list: string[];
}

export const useMultiRangeSlider = ({
  minIndex,
  maxIndex,
  list,
}: UseMultiRangeSliderProps) => {
  const min = 0;
  const max = list.length - 1;
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round((value / max) * 100),
    [],
  );

  const onInnerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'Min' | 'Max',
  ) => {
    let newMin = minIndex;
    let newMax = maxIndex;

    if (type === 'Min') {
      newMin = Number(e.target.value);
    } else if (type === 'Max') {
      newMax = Number(e.target.value);
    }

    const [min, max] = [Math.min(newMin, newMax), Math.max(newMin, newMax)];

    const minPercent = getPercent(min);
    const maxPercent = getPercent(max);

    if (!range.current) return;

    range.current.style.left = `${minPercent}%`;
    range.current.style.width = `${maxPercent - minPercent}%`;
  };

  return { min, max, range, onInnerChange };
};
