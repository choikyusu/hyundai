import { ShopCard } from '@/src/components/common/Card/ShopCard/ShopCard';
import { CommonSection } from '../CommonSection';
import { HorizontalSlide } from '@/src/components/common/HorizontalSlide/HorizontalSlide';
import { styled } from 'styled-components';
import { bestList, list } from './data/data';
import { ListItem } from './ListItem/ListItem';

export const HyundaiShop = () => {
  return (
    <CommonSection
      title="현대 Shop"
      titleTailList={[
        '현대자동차 공식 온라인몰에서 다양한 상품을 확인해보세요.',
      ]}
    >
      <Styled.SectionBody>
        <HorizontalSlide>
          {list.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </HorizontalSlide>
        <ShopCard bestList={bestList} />
      </Styled.SectionBody>
    </CommonSection>
  );
};

const Styled = {
  SectionBody: styled.div`
    padding-right: 0 !important;
    padding-left: 0 !important;

    margin-top: 30px;
    padding: 0 15px;
  `,
};
