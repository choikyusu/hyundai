import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { BUTTON_STYLE } from './styles/buttonStyle';
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';
import { SubList } from './SubList/SubList';
import { lnbMenuTreeList } from './data/data';
import { useLnbList } from './hook/useLnbList';
import { Shop } from './Additional/Shop';

export interface LnbListProps {
  el: HTMLDivElement | null;
}

export const LnbList = ({ el }: LnbListProps) => {
  const {
    itemList,
    onLevel1Click,
    onLevel2Click,
    onClickCloseButton,
    isLv1Selected,
    isLv2Selected,
  } = useLnbList({ el });

  return (
    <Styled.LnbList>
      {lnbMenuTreeList.map((lnb, index) => (
        <Styled.LnbItem key={index}>
          <Styled.LnbMainButton
            $isSelected={isLv1Selected(index)}
            onClick={() => onLevel1Click(index)}
            ref={(el: HTMLButtonElement) => el && itemList.push(el)}
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
            onClickCloseButton={onClickCloseButton}
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
  LnbList: styled.ul`
    @media screen and (max-width: 767px) {
      order: 2;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 55%;
      min-width: 500px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      min-width: 380px;
    }
  `,
  LnbItem: styled.li`
    @media screen and (max-width: 767px) {
      padding: 0;
    }
  `,
  LnbMainButton: styled(CommonStyled.Button)<{ $isSelected: boolean }>`
    ${BUTTON_STYLE}

    @media screen and (max-width: 767px) {
      position: relative;
      color: ${props => (props.$isSelected ? '#007fa8' : '#000')};
    }

    @media screen and (min-width: 768px) {
      display: flex;
    }

    img {
      color: #fff !important;
    }
  `,
  IconWrapper: styled.span`
    @media screen and (max-width: 767px) {
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
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
  `,
};
