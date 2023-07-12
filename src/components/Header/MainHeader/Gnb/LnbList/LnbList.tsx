import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { BUTTON_STYLE } from './styles/buttonStyle';
import Image from 'next/image';

export const LnbList = () => {
  return (
    <Styled.LnbList>
      <Styled.LnbItem>
        <Styled.LnbMainButton>모델</Styled.LnbMainButton>
        <Styled.LnbMainButton>구매/이벤트</Styled.LnbMainButton>
        <Styled.LnbMainButton>서비스/멤버십</Styled.LnbMainButton>
        <Styled.LnbMainButton>디지털/고객지원</Styled.LnbMainButton>
        <Styled.LnbMainButton>브랜드</Styled.LnbMainButton>
        <Styled.LnbMainButton>
          <Image
            width={49}
            height={20}
            src="/images/hyundai_shop_logo.png"
            alt="현대샵"
          />
        </Styled.LnbMainButton>
      </Styled.LnbItem>
    </Styled.LnbList>
  );
};

const Styled = {
  LnbList: styled.ul``,
  LnbItem: styled.li`
    padding: 0;
  `,
  LnbMainButton: styled(CommonStyled.Button)`
    ${BUTTON_STYLE}
    position: relative;
    text-align: left;
    color: #000;

    img {
      color: #fff !important;
    }
  `,
};
