import Link from 'next/link';
import { styled } from 'styled-components';

interface MobileButtonDetailProps {
  isShow: boolean;
}

export const MobileButtonDetail = ({ isShow }: MobileButtonDetailProps) => {
  if (!isShow) return null;
  return (
    <Styled.MobileButtonDetail
      href="/kr/ko/e/vehicles/type/eco"
      title="수소 / 전기차 차량 자세히 보기"
    >
      자세히
      <span>보기</span>
    </Styled.MobileButtonDetail>
  );
};

const Styled = {
  MobileButtonDetail: styled(Link)`
    position: absolute;
    top: 11px;
    right: 40px;
    height: 40px;
    padding: 0 15px 0 0;
    font-family: 'HyundaiSansTextKRR';
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.4px;
    line-height: 40px;
    color: #007fa8;
    width: auto;
    background-color: transparent;
    border-bottom: 0;

    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%) rotate(45deg);
      width: 6px;
      height: 6px;
      box-sizing: border-box;
      border-right: 1px solid #007fa8;
      border-top: 1px solid #007fa8;
    }
  `,
};
