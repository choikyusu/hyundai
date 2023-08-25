import { CSSProp, css, styled } from 'styled-components';

interface ElCarouselItemProps {
  type: ElCarouselType;
  itemList: HTMLDivElement[];
  gridStyle?: GridType;
  children: React.ReactNode;
}

export const ElCarouselItem = ({
  type,
  itemList,
  gridStyle,
  children,
}: ElCarouselItemProps) => {
  return (
    <Styled.ElCarouselItem
      $variant={VARIANT_STYLE.ElCarouselItem[type]}
      ref={(el: HTMLDivElement) => el && itemList.push(el)}
    >
      <Styled.ElCarouselGroupList
        $variant={VARIANT_STYLE.ElCarouselGroupList[type]}
      >
        <Styled.ElCarouselUnit
          $variant={VARIANT_STYLE.ElCarouselUnit[type]}
          $gridStyle={gridStyle}
        >
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
    ModelSection: css`
      text-align: center;
    `,
    Brand: css``,
    Events: css``,
    CarList: css`
      height: 100%;
    `,
    QuickMenu: css``,
  },
  ElCarouselGroupList: {
    Main: css`
      height: 100%;
      justify-content: center;
    `,
    GnbEvent: css``,
    ModelSection: css`
      height: 100%;
      justify-content: center;
    `,
    Brand: css``,
    Events: css``,
    CarList: css`
      height: 100%;
    `,
    QuickMenu: css`
      height: 100%;
    `,
  },
  ElCarouselUnit: {
    Main: css`
      position: relative;
    `,
    GnbEvent: css``,
    ModelSection: css`
      position: relative;
    `,
    Brand: css``,
    Events: css``,
    CarList: css`
      height: 100%;
    `,
    QuickMenu: css``,
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
  ElCarouselUnit: styled.li<{ $variant: CSSProp; $gridStyle?: GridType }>`
    width: 100%;

    @media screen and (max-width: 767px) {
      ${props => props.$gridStyle && 'display: grid;'}
      ${props =>
        props.$gridStyle &&
        `grid-template-columns: ${props.$gridStyle.templateColumns.small}`};
      ${props => props.$gridStyle && `gap: ${props.$gridStyle.gap.small}`};
      ${props =>
        props.$gridStyle?.alignItem &&
        `align-items: ${props.$gridStyle?.alignItem}`};
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      ${props => props.$gridStyle && 'display: grid;'}
      ${props =>
        props.$gridStyle &&
        `grid-template-columns: ${props.$gridStyle.templateColumns.medium}`};
      ${props => props.$gridStyle && `gap: ${props.$gridStyle.gap.medium}`};
      ${props =>
        props.$gridStyle?.alignItem &&
        `align-items: ${props.$gridStyle?.alignItem}`};

      position: relative;
      overflow: auto;
    }

    @media screen and (min-width: 1025px) {
      ${props => props.$gridStyle && 'display: grid;'}
      ${props =>
        props.$gridStyle &&
        `grid-template-columns: ${props.$gridStyle.templateColumns.large}`};
      ${props => props.$gridStyle && `gap: ${props.$gridStyle.gap.large}`};
      ${props =>
        props.$gridStyle?.alignItem &&
        `align-items: ${props.$gridStyle?.alignItem}`};

      position: relative;
      overflow: auto;
    }

    ${props => props.$variant}
  `,
};
