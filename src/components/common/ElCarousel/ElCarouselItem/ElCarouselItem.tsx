import { CSSProp, css, styled } from 'styled-components';

interface ElCarouselItemProps {
  type: ElCarouselType;
  itemList: HTMLDivElement[];
  rowCount?: number;
  children: React.ReactNode;
}

export const ElCarouselItem = ({
  type,
  itemList,
  rowCount,
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
          $rowCount={rowCount}
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
  ElCarouselUnit: styled.li<{ $variant: CSSProp; $rowCount?: number }>`
    width: 100%;

    ${props => props.$rowCount && 'display: grid;'}
    ${props =>
      props.$rowCount &&
      `grid-template-columns: repeat(${props.$rowCount}, 1fr);`}
    ${props => props.$rowCount && 'grid-gap: 2.55%;'}
    ${props => props.$rowCount && 'gap: 2.55%;'}

    ${props => props.$variant}
  `,
};
