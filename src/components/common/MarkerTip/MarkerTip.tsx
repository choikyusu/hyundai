import { styled } from 'styled-components';
import { PiDotLight } from 'react-icons/pi';

interface MarkerTipProps {
  name: string;
  detailList: string[];
}

export const MarkerTip = ({ name, detailList }: MarkerTipProps) => {
  return (
    <Styled.PopOverLocation>
      <Styled.PositionInfo>
        <Styled.Title>{name}</Styled.Title>
      </Styled.PositionInfo>
      <Styled.TestCarListWrap>
        {detailList.map(detail => (
          <>
            <PiDotLight />
            <Styled.Status>{detail}</Styled.Status>
          </>
        ))}
      </Styled.TestCarListWrap>
    </Styled.PopOverLocation>
  );
};

const Styled = {
  PopOverLocation: styled.div`
    width: 420px;
    height: 208px;
    display: block;
    padding: 50px 30px;
    background-color: #fff;
  `,
  PositionInfo: styled.section`
    position: relative;
  `,
  Title: styled.div`
    font-family: 'HyundaiSansHeadKR';
    font-size: 30px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -0.4px;
    line-height: 1;
  `,
  TestCarListWrap: styled.section`
    margin-top: 20px;
    padding: 20px 30px;
    background: #f6f3f2;
    text-align: center;
  `,
  Status: styled.p`
    display: inline-block;
    font-family: 'HyundaiSansTextKRR';
    font-size: 14px;
    line-height: 28px;
    letter-spacing: -0.4px;
    line-height: 1;
    padding: 0;
    text-align: center;
  `,
};
