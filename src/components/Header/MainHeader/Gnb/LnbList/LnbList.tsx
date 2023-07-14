import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { BUTTON_STYLE } from './styles/buttonStyle';
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';
import { SubList } from './SubList/SubList';
import { lnbMenuTreeList } from './data/data';
import { useLnbList } from './hook/useLnbList';
import { Shop } from './Additional/Shop';

export const LnbList = () => {
  const { onLevel1Click, onLevel2Click, isLv1Selected, isLv2Selected } =
    useLnbList();

  return (
    <Styled.LnbList>
      {lnbMenuTreeList.map((lnb, index) => (
        <Styled.LnbItem key={index}>
          <Styled.LnbMainButton
            $isSelected={isLv1Selected(index)}
            onClick={() => onLevel1Click(index)}
          >
            {lnb.name}
            <Styled.IconWrapper>
              <Icon isSelected={isLv1Selected(index)} />
            </Styled.IconWrapper>
          </Styled.LnbMainButton>
          <SubList
            subList={lnb.level2List}
            isShow={isLv1Selected(index)}
            onLevel2Click={onLevel2Click}
            isLv2Selected={isLv2Selected}
          />
        </Styled.LnbItem>
      ))}
      <Shop />
    </Styled.LnbList>
  );
};

interface IconProps {
  isSelected: boolean;
}

const Icon = ({ isSelected }: IconProps) => {
  return isSelected ? <BsDashCircle /> : <BsPlusCircle />;
};

export const Styled = {
  LnbList: styled.ul``,
  LnbItem: styled.li`
    padding: 0;
  `,
  LnbMainButton: styled(CommonStyled.Button)<{ $isSelected: boolean }>`
    ${BUTTON_STYLE}
    position: relative;
    text-align: left;
    color: ${props => (props.$isSelected ? '#007fa8' : '#000')};

    img {
      color: #fff !important;
    }
  `,
  IconWrapper: styled.span`
    width: 23px;
    height: 100%;
    display: block;
    position: absolute;
    right: 12px;
    top: 0;
    bottom: 0;

    svg {
      width: 23px;
      height: 23px;
    }
  `,
};
