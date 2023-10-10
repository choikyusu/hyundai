import { styled } from 'styled-components';
import { useMultiRangeSlider } from './useMultiRangeSlider';

interface MultiRangeSliderProps {
  minIndex: number;
  maxIndex: number;
  onChangeInputRange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'Min' | 'Max',
  ) => void;
  list: string[];
}

export const MultiRangeSlider = ({
  minIndex,
  maxIndex,
  onChangeInputRange,
  list,
}: MultiRangeSliderProps) => {
  const { max, min, range, onInnerChange } = useMultiRangeSlider({
    minIndex,
    maxIndex,
    list,
  });

  return (
    <Styled.Container>
      <Styled.Thumb
        type="range"
        min={min}
        max={max}
        value={minIndex}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onInnerChange(e, 'Min');
          onChangeInputRange(e, 'Min');
        }}
        style={{ zIndex: minIndex > max - 100 ? 5 : 3 }}
      />
      <Styled.Thumb
        type="range"
        min={min}
        max={max}
        value={maxIndex}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onInnerChange(e, 'Max');
          onChangeInputRange(e, 'Max');
        }}
        style={{ zIndex: 4 }}
      />

      <Styled.Slider>
        <Styled.SliderTrack />
        <Styled.SliderRange ref={range} />
        <Styled.SliderLeftValue>
          {list[Math.min(minIndex, maxIndex)]}
        </Styled.SliderLeftValue>
        <Styled.SliderRightValue>
          {list[Math.max(minIndex, maxIndex)]}
        </Styled.SliderRightValue>
      </Styled.Slider>
    </Styled.Container>
  );
};

const Styled = {
  Thumb: styled.input`
    pointer-events: none;
    position: absolute;
    background: transparent;
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
    margin-top: 20px;
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
