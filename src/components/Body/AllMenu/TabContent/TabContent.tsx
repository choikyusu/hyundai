import Link from 'next/link';
import { styled } from 'styled-components';
import { Depth2Item } from './Depth2Item/Depth2Item';
import { useTabContent } from './useTabContent';

interface TabContentProps {
  keyword: string;
  treeList: PCMenuTreeType[];
}

const { hasKeyword } = useTabContent();

export const TabContent = ({ keyword, treeList }: TabContentProps) => {
  const renderDepth3 = (level2: Level2Type | FooterDataType) => {
    switch (level2.type) {
      case 'Car':
        return level2.level3List.map(
          (level3, index) =>
            hasKeyword(level3.carName, keyword) && (
              <Depth2Item key={index} name={level3.carName} />
            ),
        );
      case 'Menu':
        return level2.level3List.map(
          (level3, index) =>
            hasKeyword(level3.name, keyword) && (
              <Depth2Item key={index} name={level3.name} />
            ),
        );
      case 'Footer': {
        return level2.subMenuList.map(
          (level3, index) =>
            hasKeyword(level3.subTitle, keyword) && (
              <Depth2Item key={index} name={level3.subTitle} />
            ),
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <Styled.TabContentList>
      {treeList.map((level1, index) => (
        <Styled.TabContent key={index}>
          <Styled.TabTitle>{level1.name}</Styled.TabTitle>
          <Styled.Depth1>
            {level1.level2List.map((level2, index2) => (
              <Styled.MoreButton key={index2}>
                <Styled.GnbTitle href="">{level2.name}</Styled.GnbTitle>
                <Styled.Depth2>{renderDepth3(level2)}</Styled.Depth2>
              </Styled.MoreButton>
            ))}
          </Styled.Depth1>
        </Styled.TabContent>
      ))}
    </Styled.TabContentList>
  );
};

const Styled = {
  TabContentList: styled.div`
    margin: 0 auto;
    width: 100%;
  `,
  TabContent: styled.div`
    display: block;
    padding: 75px 0;
    border-bottom: 1px solid #e4dcd3;
  `,
  TabTitle: styled.h2`
    font-family: 'HyundaiSansHeadKR';
    font-size: 30px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -0.4px;
    color: #222;
  `,
  Depth1: styled.ul`
    margin-top: 45px;
  `,
  MoreButton: styled.li`
    margin-top: 35px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    grid-gap: 0 clamp(20px, 4vw, 57px);
    gap: 0 clamp(20px, 4vw, 57px);

    &:first-child {
      margin-top: 0;
    }
  `,
  GnbTitle: styled(Link)`
    display: flex;
    align-self: flex-start;
    width: 12.9%;
    min-width: 96px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
    color: #222;
    word-break: keep-all;
  `,
  Depth2: styled.ul`
    display: grid;
    flex: 1;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 35px 10px;
    gap: 35px 10px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
};
