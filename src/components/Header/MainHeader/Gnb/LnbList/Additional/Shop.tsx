import { Styled } from '../LnbList';
import Image from 'next/image';

export const Shop = () => {
  return (
    <Styled.LnbItem>
      <Styled.LnbMainButton $isSelected={false}>
        <Image
          width={49}
          height={20}
          src="/images/hyundai_shop_logo.png"
          alt="현대샵"
        />
      </Styled.LnbMainButton>
    </Styled.LnbItem>
  );
};
