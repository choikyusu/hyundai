import { styled } from 'styled-components';
import { ElCarousel } from './ElCarousel/ElCarousel';

export const GnbEvent = () => {
  return (
    <Styled.GnbEvent>
      <Styled.EventContent>
        <ElCarousel />
      </Styled.EventContent>
    </Styled.GnbEvent>
  );
};

const Styled = {
  GnbEvent: styled.div`
    position: relative;
    padding: 25px 15px 10px;
    background: #fff;
  `,
  EventContent: styled.div``,
};
