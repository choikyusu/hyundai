import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { CarList } from './CarList/CarList';
import { MenuList } from './MenuList/MenuList';
import { MobileButtonDetail } from './MobileButtonDetail/MobileButtonDetail';

interface SubListProps {
  isShow: boolean;
  subList: LnbMenuTreeType['level2List'];
  isLv2Selected: (index: number) => boolean;
  onLevel2Click: (index: number) => void;
}

export const SubList = ({
  isShow,
  subList,
  isLv2Selected,
  onLevel2Click,
}: SubListProps) => {
  const childrenList = (item: Level2Type, index: number) => {
    switch (item.type) {
      case 'Car':
        return (
          <CarList subList={item.level3List} isShow={isLv2Selected(index)} />
        );
      case 'Menu':
        return (
          <MenuList subList={item.level3List} isShow={isLv2Selected(index)} />
        );
      default:
        return null;
    }
  };

  return (
    <Styled.SubWrapper>
      <Styled.SubContents $isShow={isShow}>
        <Styled.SubList>
          <Styled.ModelInfo>
            <Styled.SubMenuList>
              {subList.map((item, index) => (
                <Styled.SubMenuItem
                  key={index}
                  onClick={() => onLevel2Click(index)}
                >
                  <Styled.ModelButton $isSelected={isLv2Selected(index)}>
                    {item.name}
                  </Styled.ModelButton>
                  <MobileButtonDetail isShow={isLv2Selected(index)} />
                  {childrenList(item, index)}
                </Styled.SubMenuItem>
              ))}
            </Styled.SubMenuList>
          </Styled.ModelInfo>
        </Styled.SubList>
      </Styled.SubContents>
    </Styled.SubWrapper>
  );
};

const Styled = {
  SubWrapper: styled.div``,
  SubContents: styled.div<{ $isShow: boolean }>`
    display: ${props => (props.$isShow ? 'block' : 'none')};
  `,
  SubList: styled.div``,
  ModelInfo: styled.div`
    padding-left: 0 !important;
    height: auto;
    min-height: 200px;
  `,
  SubMenuList: styled.ul`
    padding-left: 0;
  `,
  SubMenuItem: styled.li`
    position: relative;
    background-color: #f6f3f2;
  `,
  ModelButton: styled(CommonStyled.Button)<{ $isSelected: boolean }>`
    display: block;
    position: relative;
    width: 100%;
    padding: 0 15px 0 30px;
    background-color: #f6f3f2;
    border-bottom: 1px solid #e5e5e5;
    font-family: 'HyundaiSansHeadKR';
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.4px;
    line-height: 59px;

    width: auto;
    text-align: left;
    color: ${props => (props.$isSelected ? '#007fa8;' : '#000')};
    display: block;
  `,
};
