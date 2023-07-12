import Link from 'next/link';
import { styled } from 'styled-components';

export const LnbBottomList = () => {
  return (
    <Styled.LnbBottomList>
      <Styled.List>
        <Styled.Item>
          <p>
            <Styled.Link
              href="/kr/ko/e/vehicles/estimation"
              title="내 차 만들기(견적)"
            >
              내 차 만들기(견적)
            </Styled.Link>
          </p>
        </Styled.Item>
        <Styled.Item>
          <p>
            <Styled.Link
              href="/kr/ko/e/vehicles/estimation"
              title="내 차 만들기(견적)"
            >
              구매상담신청
            </Styled.Link>
          </p>
        </Styled.Item>
        <Styled.Item>
          <p>
            <Styled.Link
              href="/kr/ko/e/vehicles/estimation"
              title="내 차 만들기(견적)"
            >
              시승신청
            </Styled.Link>
          </p>
        </Styled.Item>
        <Styled.Item>
          <p>
            <Styled.Link
              href="/kr/ko/e/vehicles/estimation"
              title="내 차 만들기(견적)"
            >
              이달의 구매혜택
            </Styled.Link>
          </p>
        </Styled.Item>
      </Styled.List>
    </Styled.LnbBottomList>
  );
};

const Styled = {
  LnbBottomList: styled.div`
    margin-top: auto;
  `,
  List: styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: auto;
  `,
  Item: styled.li`
    width: 50%;
    text-align: center;
    border-top: 1px solid #cac6c4;
  `,
  Link: styled(Link)`
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    padding-left: 33px;
    border-top: 1px solid #fff;
    background-color: #f6f3f2;
    font-family: 'HyundaiSansTextKR';
    font-size: 13px;
    line-height: 21px;
    letter-spacing: -0.4px;
    color: #444;
    background-repeat: no-repeat;
    background-position: calc(50% - 53px) 50%;
    background-size: 22px;
  `,
};
