import { styled } from 'styled-components';
import { ElCarousel } from '../../common/ElCarousel/ElCarousel';
import { fluidList } from '../data/data';
import { Fluid } from './Fluid/Fluid';
import { QuickMenu } from './QuickMenu/QuickMenu';

export const SlideMainBanner = () => {
  return (
    <Styled.KeyVisualWrapper>
      <ElCarousel type="Main" config={{ autoSlide: true }}>
        {fluidList.map((fluid, index) => (
          <Fluid key={index} fluid={fluid} />
        ))}
      </ElCarousel>
      <QuickMenu />
    </Styled.KeyVisualWrapper>
  );
};

const Styled = {
  KeyVisualWrapper: styled.div`
    position: relative;
    margin: 0 auto;
    display: block;
    width: 100%;
    overflow: visible;
  `,
};
