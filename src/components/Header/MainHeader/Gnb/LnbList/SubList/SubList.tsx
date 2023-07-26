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
    <Styled.SubWrapper $isShow={isShow}>
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
  SubWrapper: styled.div<{ $isShow: boolean }>`
    @media screen and (min-width: 768px) {
      overflow-y: overlay;
      display: none;
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      z-index: 99;
      background-color: #f6f3f2;
      border-top: 1px solid #002c5f;
      border-bottom: 1px solid #e5e5e5;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      top: 64px;
      max-height: calc(100vh - 60px) !important;
    }

    @media screen and (min-width: 768px) {
      display: ${props => (props.$isShow ? 'block' : 'none')};
      max-height: calc(100vh - 80px);
    }
  `,
  SubContents: styled.div<{ $isShow: boolean }>`
    @media screen and (min-width: 768px) {
      position: relative;
      z-index: 4;
      margin: 0 auto;
      padding: 32px 30px 38px;
      max-width: 1400px;
      box-sizing: content-box;
    }

    @media screen and (max-width: 767px) {
      display: ${props => (props.$isShow ? 'block' : 'none')};
    }
  `,
  SubList: styled.div``,
  ModelInfo: styled.div`
    @media screen and (max-width: 767px) {
      padding-left: 0 !important;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      z-index: 3;
      padding-left: 0;
    }

    height: auto;
    min-height: 200px;
  `,
  SubMenuList: styled.ul`
    @media screen and (max-width: 767px) {
      padding-left: 0;
    }
  `,
  SubMenuItem: styled.li`
    @media screen and (min-width: 768px) {
      list-style: none;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 140px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 165px;
    }

    @media screen and (max-width: 767px) {
      position: relative;
      background-color: #f6f3f2;
    }
  `,
  ModelButton: styled(CommonStyled.Button)<{ $isSelected: boolean }>`
    @media screen and (max-width: 767px) {
      width: auto;
      text-align: left;
      color: ${props => (props.$isSelected ? '#007fa8;' : '#000')};
      display: block;
    }

    @media screen and (max-width: 767px) {
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
    }

    @media screen and (min-width: 768px) {
      outline: none;
      border: none;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      width: 18.29%;
      padding: 8px 0;
      display: block;
      color: ${props => (props.$isSelected ? '#007fa8;' : '#000')};
      font-family: 'HyundaiSansHeadKR';
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.4px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 165px;
      font-size: 15px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      text-align: left;
    }
  `,
};
