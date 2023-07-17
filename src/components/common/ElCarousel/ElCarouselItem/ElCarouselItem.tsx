import { CSSProp, css, styled } from 'styled-components';

interface ElCarouselItemProps {
  type: ElCarouselType;
  itemList: HTMLDivElement[];
  children: React.ReactNode;
}

export const ElCarouselItem = ({
  type,
  itemList,
  children,
}: ElCarouselItemProps) => {
  return (
    <Styled.ElCarouselItem
      $variant={VARIANT_STYLE.ElCarouselItem[type]}
      ref={(el: HTMLDivElement) => itemList.push(el)}
    >
      <Styled.ElCarouselGroupList
        $variant={VARIANT_STYLE.ElCarouselGroupList[type]}
      >
        <Styled.ElCarouselUnit $variant={VARIANT_STYLE.ElCarouselUnit[type]}>
          {children}
        </Styled.ElCarouselUnit>
      </Styled.ElCarouselGroupList>
    </Styled.ElCarouselItem>
  );
};

const VARIANT_STYLE = {
  ElCarouselItem: {
    Main: css`
      text-align: center;
    `,
    GnbEvent: css``,
  },
  ElCarouselGroupList: {
    Main: css`
      height: 100%;
      justify-content: center;
    `,
    GnbEvent: css``,
  },
  ElCarouselUnit: {
    Main: css`
      position: relative;
    `,
    GnbEvent: css``,
  },
};

const Styled = {
  ElCarouselItem: styled.div<{ $variant: CSSProp }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    z-index: 0;
    z-index: 2; // 확인

    ${props => props.$variant}
  `,
  ElCarouselGroupList: styled.ul<{ $variant: CSSProp }>`
    display: flex;
    flex-wrap: nowrap;

    ${props => props.$variant}
  `,
  ElCarouselUnit: styled.li<{ $variant: CSSProp }>`
    width: 100%;

    ${props => props.$variant}
  `,
};