import { styled } from 'styled-components';

interface FilterItemProps {
  children: React.ReactNode;
  type: string;
}

export const FilterItem = ({ children, type }: FilterItemProps) => {
  return (
    <Styled.FilterItem>
      <Styled.FilterTopHeader>
        <strong>{type}</strong>
      </Styled.FilterTopHeader>
      {children}
    </Styled.FilterItem>
  );
};

const Styled = {
  FilterItem: styled.li`
    display: flex;
    flex-direction: row;
    position: relative;
    border-top: 1px solid #ccc;
    overflow: hidden;
    flex: 1;

    padding-bottom: 30px;
    flex-direction: column;
    border-top: none;
    border-right: 1px solid #ccc;

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      padding-left: 30px;
    }

    @media screen and (max-width: 767px) {
      padding: 30px 0;
      width: 100%;
      border: none;
      border-bottom: 1px solid #ccc;
      overflow: visible;
    }

    @media screen and (max-width: 767px) {
      padding-top: 0;
      border-top: none;
    }

    &:first-child {
      padding-right: 30px;
    }

    &:nth-child(2) {
      padding: 0 30px;
    }

    &:last-child {
      padding: 0 30px;
      border-right: none;
    }

    @media screen and (max-width: 767px) {
      &:first-child {
        padding-right: 0;
        width: 100%;
      }
    }
  `,
  FilterTopHeader: styled.p`
    padding-top: 40px;
    width: 100%;
    line-height: 22px;

    @media screen and (max-width: 767px) {
      padding-top: 0;
    }
  `,
};
