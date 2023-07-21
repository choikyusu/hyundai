import { styled } from 'styled-components';
import { Card } from '../Card';
import Link from 'next/link';

interface ShopCardProps {
  bestList: ShopItemType[];
}

export const ShopCard = ({ bestList }: ShopCardProps) => {
  return (
    <Styled.ShopBestWrap>
      <Card
        title="현대 Shop Best"
        linkText="더보기"
        linkUrl="https://shop.hyundai.com/main/list?action=best&best_tp=B"
        descriptionList={['지금 현대Shop에서 인기 있는 상품이에요']}
      />
      <Styled.BestList>
        {bestList.map((best, index) => (
          <Styled.BestItem key={index}>
            <Styled.Link href={best.pageUrl}>
              <Styled.Ranking>
                {index + 1}
                <Styled.SrOnly>위</Styled.SrOnly>
              </Styled.Ranking>
              <Styled.ImageWrapper>
                <Styled.Image src={best.imageUrl} />
              </Styled.ImageWrapper>
              <Styled.ProductWrapper>
                <Styled.Product>{best.name}</Styled.Product>
                <Styled.PriceWrapper>
                  <Styled.Discount>{best.discount}</Styled.Discount>
                  <Styled.Price>
                    <Styled.Strong>{best.price}</Styled.Strong>원
                  </Styled.Price>
                </Styled.PriceWrapper>
              </Styled.ProductWrapper>
            </Styled.Link>
          </Styled.BestItem>
        ))}
      </Styled.BestList>
    </Styled.ShopBestWrap>
  );
};

const Styled = {
  ShopBestWrap: styled.div`
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
  BestList: styled.ul`
    display: flex;
    width: calc(100% - 224px);

    width: 100%;
    padding: 25px 15px 30px;
    background: #f6f3f2;

    flex-direction: column;
    gap: 20px;
  `,
  BestItem: styled.li`
    width: 100%;
    margin: 20px 0 0;

    margin-top: 0;
  `,
  Link: styled(Link)`
    position: relative;
    display: block;
    font-size: 0;
    text-align: left;

    display: flex;
    align-items: center;
  `,
  Ranking: styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    background: #007fa8;
    font-family: 'HyundaiSansHeadKR';
    font-size: 20px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: -0.4px;
    color: #fff;
    text-align: center;

    width: 30px;
    height: 30px;
    font-size: 16px;
  `,
  SrOnly: styled.div`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  `,
  ImageWrapper: styled.div`
    border: 1px solid #e5e5e5;
  `,
  Image: styled.img`
    height: 100%;
    width: 110px;
  `,
  ProductWrapper: styled.div`
    margin-left: 16px;
  `,
  Product: styled.div`
    overflow: hidden;
    display: -webkit-box;
    margin: 15px 0 0;
    text-overflow: ellipsis;
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    letter-spacing: -0.24px;
    color: #000;
    line-height: 26px;
    word-break: keep-all;

    margin: 0;
    font-size: 14px;
    line-height: 21px;
  `,
  PriceWrapper: styled.div`
    display: flex;
    margin: 4px 0 0;
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    letter-spacing: -0.24px;
    color: #000;
    line-height: 26px;
  `,
  Discount: styled.div`
    font-family: 'HyundaiSansHeadKR';
    color: #e63312;
    font-size: 14px;
  `,
  Price: styled.div`
    font-size: 14px;
  `,
  Strong: styled.strong`
    margin: 0 5px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 22px;

    font-size: 17px;
  `,
};
