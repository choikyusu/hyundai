import { ElCarousel } from '@/src/components/common/ElCarousel/ElCarousel';
import { styled } from 'styled-components';
import { CommonSection } from '../CommonSection';
import { brandList } from './data/data';
import { Brand } from './Brand/Brand';

export const BrandSection = () => {
  const config: ElCarouselConfigType = {
    showArrow: { small: true, medium: true, large: true },
  };

  return (
    <CommonSection
      title="Brand"
      titleTailList={[
        '지속가능한 미래로의 연결을 추구하는',
        '현대자동차의 브랜드 캠페인을 만나보세요.',
      ]}
    >
      <Styled.SectionBody>
        <ElCarousel type="Brand" config={config}>
          {brandList.map((barnd, index) => (
            <Brand key={index} barnd={barnd} />
          ))}
        </ElCarousel>
      </Styled.SectionBody>
    </CommonSection>
  );
};

const Styled = {
  SectionBody: styled.div`
    margin-top: 30px;
    padding: 0 15px;
  `,
};
