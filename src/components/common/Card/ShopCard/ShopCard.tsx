import { styled } from 'styled-components';
import { Card } from '../Card';

export const ShopCard = () => {
  return (
    <Styled.AppWrap>
      <Card
        title="현대 Shop Best"
        linkText="더보기"
        linkUrl="https://shop.hyundai.com/main/list?action=best&best_tp=B"
        descriptionList={['지금 현대Shop에서 인기 있는 상품이에요']}
      />
    </Styled.AppWrap>
  );
};

const Styled = {
  AppWrap: styled.div`
    position: relative;
    width: 288px;
    height: 440px;
    padding: 33px 0 0 40px;
    text-align: left;
    background-color: #f6f3f2;

    width: calc(100% - 56px);
    height: auto;
    margin: 40px auto 0;
    padding-bottom: 31px px;

    width: calc(100% - 30px);
    margin: 30px 15px 0;
    padding: 30px 15px 25px;
  `,
};
