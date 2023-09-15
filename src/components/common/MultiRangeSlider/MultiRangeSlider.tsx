import { useCallback, useRef, useState } from 'react';
import { styled } from 'styled-components';

interface MultiRangeSliderProps {
  list: string[];
}

export const MultiRangeSlider = ({ list }: MultiRangeSliderProps) => {
  const min = 0;
  const max = list.length - 1;

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  const onChangeInputRange = () => {
    if (!minValRef.current || !maxValRef.current) return;

    setMinVal(Number(minValRef.current.value));
    setMaxVal(Number(maxValRef.current.value));

    const [min, max] = [
      Math.min(
        Number(minValRef.current.value),
        Number(maxValRef.current.value),
      ),
      Math.max(
        Number(minValRef.current.value),
        Number(maxValRef.current.value),
      ),
    ];

    const minPercent = getPercent(min);
    const maxPercent = getPercent(max);

    if (!range.current) return;

    range.current.style.left = `${minPercent}%`;
    range.current.style.width = `${maxPercent - minPercent}%`;
  };

  return (
    <Styled.Container>
      <Styled.Thumb
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={onChangeInputRange}
        style={{ zIndex: minVal > max - 100 ? 5 : 3 }}
      />
      <Styled.Thumb
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={onChangeInputRange}
        style={{ zIndex: 4 }}
      />

      <Styled.Slider>
        <Styled.SliderTrack />
        <Styled.SliderRange ref={range} />
        <Styled.SliderLeftValue>
          {list[Math.min(minVal, maxVal)]}
        </Styled.SliderLeftValue>
        <Styled.SliderRightValue>
          {list[Math.max(minVal, maxVal)]}
        </Styled.SliderRightValue>
      </Styled.Slider>
    </Styled.Container>
  );
};

const Styled = {
  Thumb: styled.input`
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 100%;
    outline: none;
    -webkit-appearance: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }

    &::-webkit-slider-thumb {
      border: 6px solid #007fa8 !important;
      border-radius: 50%;
      box-shadow: 0 0 1px 1px #ced4da;
      background: #ffffff;
      cursor: pointer;
      height: 20px;
      width: 20px;
      margin-top: 4px;
      pointer-events: all;
      position: relative;
    }

    &::-moz-range-thumb {
      border: 6px solid #007fa8 !important;
      border-radius: 50%;
      cursor: pointer;
      height: 20px;
      width: 20px;
      margin-top: 4px;
      pointer-events: all;
      position: relative;
    }
  `,
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `,
  Slider: styled.div`
    position: relative;
    width: 100%;
  `,
  SliderTrack: styled.div`
    position: absolute;
    height: 4px;

    background-color: #999 !important;
    width: 100%;
    z-index: 1;
  `,
  SliderRange: styled.div`
    position: absolute;
    border-radius: 3px;
    height: 4px;

    background-color: #007fa8 !important;
    z-index: 2;

    left: 0%;
    width: 100%;
  `,
  SliderLeftValue: styled.div`
    position: absolute;

    font-size: 12px;
    margin-top: 20px;

    left: 6px;
  `,
  SliderRightValue: styled.div`
    position: absolute;

    font-size: 12px;
    margin-top: 20px;

    right: -4px;
  `,
};
