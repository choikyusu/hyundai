import { styled } from 'styled-components';
import { ElCarousel } from '../../common/ElCarousel/ElCarousel';
import { fluidList } from '../data/data';
import { Fluid } from './Fluid/Fluid';
import { QuickMenu } from './QuickMenu/QuickMenu';

export const SlideMainBanner = () => {
  return (
    <Styled.KeyVisualWrapper>
      <ElCarousel
        type="Main"
        config={{
          showArrow: { small: false, medium: true, large: true },
          style: {
            arrow: { background: 'transparent', color: 'black', size: '49px' },
          },
        }}
      >
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
