import classnames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

export const MultiRangeSlider = () => {
  const min = 0;
  const max = 3;

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  //   useEffect(() => {
  //     // onChange({ min: minVal, max: maxVal });
  //   }, [minVal, maxVal, onChange]);

  return (
    <Styled.Wrap>
      <div className="container">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={event => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={classnames('thumb thumb--zindex-3', {
            'thumb--zindex-5': minVal > max - 100,
          })}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={event => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">{minVal}</div>
          <div className="slider__right-value">{maxVal}</div>
        </div>
      </div>
    </Styled.Wrap>
  );
};

const Styled = {
  Wrap: styled.div`
    .container {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .slider {
      position: relative;
      width: 200px;
    }

    .slider__track,
    .slider__range,
    .slider__left-value,
    .slider__right-value {
      position: absolute;
    }

    .slider__track,
    .slider__range {
      border-radius: 3px;
      height: 5px;
    }

    .slider__track {
      background-color: #ced4da;
      width: 100%;
      z-index: 1;
    }

    .slider__range {
      background-color: #9fe5e1;
      z-index: 2;
    }

    .slider__left-value,
    .slider__right-value {
      color: #dee2e6;
      font-size: 12px;
      margin-top: 20px;
    }

    .slider__left-value {
      left: 6px;
    }

    .slider__right-value {
      right: -4px;
    }

    /* Removing the default appearance */
    .thumb,
    .thumb::-webkit-slider-thumb {
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }

    .thumb {
      pointer-events: none;
      position: absolute;
      height: 0;
      width: 200px;
      outline: none;
    }

    .thumb--zindex-3 {
      z-index: 3;
    }

    .thumb--zindex-4 {
      z-index: 4;
    }

    .thumb--zindex-5 {
      z-index: 5;
    }

    /* For Chrome browsers */
    .thumb::-webkit-slider-thumb {
      background-color: #f1f5f7;
      border: none;
      border-radius: 50%;
      box-shadow: 0 0 1px 1px #ced4da;
      cursor: pointer;
      height: 18px;
      width: 18px;
      margin-top: 4px;
      pointer-events: all;
      position: relative;
    }

    /* For Firefox browsers */
    .thumb::-moz-range-thumb {
      background-color: #f1f5f7;
      border: none;
      border-radius: 50%;
      box-shadow: 0 0 1px 1px #ced4da;
      cursor: pointer;
      height: 18px;
      width: 18px;
      margin-top: 4px;
      pointer-events: all;
      position: relative;
    }
  `,

  Middle: styled.div`
    margin-top: 20px;
    position: relative;
    width: 100%;
  `,
  MultiRangeSlider: styled.div``,
  Slider: styled.div`
    position: relative;
    z-index: 1;
    height: 10px;
    margin: 0 15px;
  `,
  Track: styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 !important;
    height: 4px !important;
    background-color: #999 !important;
  `,
  Range: styled.div`
    position: absolute;
    z-index: 2;
    left: 25%;
    right: 25%;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    height: 4px !important;
    background-color: #007fa8 !important;
  `,
  ThumbLeft: styled.div`
    position: absolute;
    z-index: 3;
    width: 20px;
    height: 20px;
    border: 6px solid #007fa8 !important;
    border-radius: 50%;

    left: 25%;
    transform: translate(-15px, -10px);
  `,
  ThumbRight: styled.div`
    position: absolute;
    z-index: 3;
    width: 20px;
    height: 20px;
    border: 6px solid #007fa8 !important;
    border-radius: 50%;

    right: 25%;
    transform: translate(15px, -10px);
  `,
  Input: styled.input`
    position: absolute;
    pointer-events: none;
    -webkit-appearance: none;
    z-index: 2;
    height: 10px;
    width: 100%;
    opacity: 0;

    &&::-webkit-slider-thumb {
      /* 겹쳐진 두 thumb를 모두 활성화 */
      pointer-events: all;
      width: 20px;
      height: 20px;
      border-radius: 0;
      border: 0 none;
      background-color: red;
      cursor: pointer;

      /* appearance를 해야 위의 스타일들을 볼 수 있음 */
      -webkit-appearance: none;
    }
  `,
};
