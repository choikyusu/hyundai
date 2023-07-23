import { HyundaiSvgComponent } from '@/src/components/assets/HyundaiSvgComponent';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';

interface LogoProps {
  isClicked: boolean;
}

export const Logo = ({ isClicked }: LogoProps) => {
  return (
    <Styled.Logo>
      <Styled.Logobutton type="button" width="35px">
        <HyundaiSvgComponent
          width="126px"
          fill={isClicked ? '#fff' : '#002c5f'}
        />
      </Styled.Logobutton>
    </Styled.Logo>
  );
};

const Styled = {
  Logo: styled.div``,
  Logobutton: styled(CommonStyled.Button)<{ width: string }>`
    overflow: hidden;
    display: block;
    width: ${props => props.width};
  `,
};
