import { HyundaiSvgComponent } from '@/src/components/assets/HyundaiSvgComponent';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';

export const Logo = () => {
  return (
    <Styled.Logo>
      <Styled.Logobutton type="button" width="35px">
        <HyundaiSvgComponent width="126px" />
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
