import { HyundaiSvgComponent } from '@/src/components/assets/HyundaiSvgComponent';
import { useMenuProvider } from '@/src/contexts/MenuContext';
import { useViewportSize } from '@/src/hooks/useViewportSize';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

export const Logo = () => {
  const { viewportSize } = useViewportSize();
  const { headerType } = useMenuProvider();

  const router = useRouter();

  return (
    <Styled.Logo>
      <Styled.Logobutton type="button" onClick={() => router.push('/')}>
        <HyundaiSvgComponent
          width={viewportSize === 'Large' ? '166px' : '126px'}
          fill={
            headerType !== 'None' &&
            viewportSize === 'Small' &&
            headerType === 'Menu'
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
