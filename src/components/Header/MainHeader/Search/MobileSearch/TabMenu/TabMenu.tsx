import { CommonStyled } from '@/src/styles/CommonStyled';
import { CSSProp, css, styled } from 'styled-components';

interface TabMenuProps {
  type: 'MobileSearch' | 'PurchaseConsult';
  keywordType: number;
  list: string[];
  onClickKeyword: (selectedKeyword: number) => void;
}

export const TabMenu = ({
  type,
  list,
  keywordType,
  onClickKeyword,
}: TabMenuProps) => {
  return (
    <Styled.TabMenu>
      <Styled.TabMenuIconWrapper>
        {list.map((item, index) => (
          <Styled.TabMenuIcon key={index}>
            <Styled.Button
              type="button"
              $isActive={keywordType === index}
              $variant={VARIANT_STYLE[type]}
              onClick={() => onClickKeyword(index)}
            >
              <span>{item}</span>
            </Styled.Button>
          </Styled.TabMenuIcon>
        ))}
      </Styled.TabMenuIconWrapper>
    </Styled.TabMenu>
  );
};

const VARIANT_STYLE = {
  MobileSearch: css<{ $isActive: boolean }>`
    height: 32px;
    font-size: 12px;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    background: ${props => (props.$isActive ? '#007fa8' : '#f6f3f2')};
    color: ${props => (props.$isActive ? '#fff' : '#666')};
  `,
  PurchaseConsult: css<{ $isActive: boolean }>`
    background: ${props => (props.$isActive ? '#fff' : '#444')};
    color: ${props => (props.$isActive ? '#000' : '#fff')};
  `,
};

const Styled = {
  Button: styled(CommonStyled.LiButton)<{
    $variant: CSSProp;
    $isActive: boolean;
  }>`
    ${props => props.$variant}
  `,

  TabMenu: styled.div`
    margin-top: 10px;
  `,
  TabMenuIconWrapper: styled.ul`
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  `,
  TabMenuIcon: styled.li`
    width: 50%;
  `,
};
