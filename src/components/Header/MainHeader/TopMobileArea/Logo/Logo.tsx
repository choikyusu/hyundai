import { HyundaiSvgComponent } from '@/src/components/assets/HyundaiSvgComponent';
import { useMenuProvider } from '@/src/contexts/MenuContext';
import { useViewportSize } from '@/src/hooks/useViewportSize';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';

interface LogoProps {
  isClicked: boolean;
}

export const Logo = ({ isClicked }: LogoProps) => {
  const { viewportSize } = useViewportSize();
  const { headerType } = useMenuProvider();

  return (
    <Styled.Logo>
      <Styled.Logobutton type="button">
        <HyundaiSvgComponent
          width={viewportSize === 'Large' ? '166px' : '126px'}
          fill={
            isClicked && viewportSize === 'Small' && headerType === 'Menu'
              ? '#fff'
              : '#002c5f'
          }
        />
      </Styled.Logobutton>
    </Styled.Logo>
  );
};

const Styled = {
  Logo: styled.div``,
  Logobutton: styled(CommonStyled.Button)`
    @media screen and (max-width: 767px) {
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
    @media screen and (max-width: 767px) {
      overflow: hidden;
      display: block;
      width: 35px;
    }

    @media screen and (min-width: 768px) {
      outline: none;
      border: none;
    }

    @media screen and (min-width: 768px) {
      display: block;
      width: 166px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      overflow: hidden;
      margin-top: 3px;
      width: 40px;
    }
  `,
};
