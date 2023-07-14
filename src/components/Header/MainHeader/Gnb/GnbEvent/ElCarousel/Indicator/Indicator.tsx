import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';

interface IndicatorProps {
  eventList: EventType[];
  selectedIndex: number;
  onClickDot: (index: number) => void;
}

export const Indicator = ({
  eventList,
  selectedIndex,
  onClickDot,
}: IndicatorProps) => {
  return (
    <Styled.ElCarouselIndicatorList>
      {eventList.map((_, index) => (
        <Styled.ElCarouselIndicator onClick={() => onClickDot(index)}>
          <Styled.ElCarouselButton $isSelected={selectedIndex === index}>
            ${index + 1}번째 슬라이드
          </Styled.ElCarouselButton>
        </Styled.ElCarouselIndicator>
      ))}
    </Styled.ElCarouselIndicatorList>
  );
};

const Styled = {
  ElCarouselIndicatorList: styled.ul`
    position: absolute;
    list-style: none;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    margin: 0;
    padding: 0;
    z-index: 2;

    margin: 0;
    bottom: 4px;
  `,
  ElCarouselIndicator: styled.li`
    display: inline-block;
    background-color: transparent;
    padding: 12px 4px;
    cursor: pointer;

    margin-right: 4px;
  `,
  ElCarouselButton: styled(CommonStyled.Button)<{ $isSelected: boolean }>`
    display: block;
    opacity: 0.48;
    width: 30px;
    height: 2px;
    background-color: #fff;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    outline: none;

    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${props =>
      props.$isSelected ? '#007fa8' : 'rgba(0, 0, 0, 0.1)'};
    color: transparent;
    opacity: 1;
    font-size: 0;
    overflow: hidden;

    opacity: 1;

    width: 8px;
    height: 8px;
  `,
};
