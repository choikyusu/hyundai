import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';
import { InfoItem } from './InfoItem/InfoItem';

interface BaseItemProps {
  item: {
    type: 'fuelType' | 'bodyType' | 'budgetRange' | 'passenger' | 'luggage';
    title: string;
    descList: string[];
    backgroundPosition: string;
    backgroundColor: string;
    link: string;
  };
  query: ExplorerBaseType;
}

export const BaseItem = ({ item, query }: BaseItemProps) => {
  return (
    <Styled.Item>
      <Styled.Link
        href={{
          pathname: item.link,
          query,
        }}
      >
        <Styled.FindCarIcon
          $backgroundColor={item.backgroundColor}
          $backgroundPosition={item.backgroundPosition}
          $isShowCheck={!!query[item.type]}
        >
          {item.title}
        </Styled.FindCarIcon>
      </Styled.Link>
      <Styled.InfoSelect>
        <Styled.B>
          {item.title}
          <InfoItem
            isMerge={item.type === 'budgetRange'}
            isQueryExist={!!query[item.type]}
            item={item}
            subQueryItemList={query[item.type]?.split(',') || []}
          />
        </Styled.B>
      </Styled.InfoSelect>
    </Styled.Item>
  );
};

const Styled = {
  Item: styled.li`
    @media screen and (max-width: 767px) {
      width: 50%;
      min-width: auto;
      margin-bottom: 40px;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      width: 230px;
    }
  `,
  Link: styled(Link)`
    @media screen and (max-width: 767px) {
      display: block;
      position: relative;
      width: 100%;
      height: auto;
      background-color: transparent;
    }

    @media screen and (min-width: 768px) {
      display: inline-block;
      position: static;
    }
  `,
  FindCarIcon: styled.i<{
    $backgroundPosition: string;
    $backgroundColor: string;
    $isShowCheck: boolean;
  }>`
    @media screen and (min-width: 768px) {
      display: inline-block;
      overflow: hidden;
      background-repeat: no-repeat;
      background-image: url(/images/findcar_ico_sprite.png);
    }

    background-position: ${props => props.$backgroundPosition};
    background-size: 600%;
    background-color: ${props => props.$backgroundColor};

    &:after {
      display: ${props => (props.$isShowCheck ? 'block' : 'none')} !important;
      @media screen and (max-width: 767px) {
        content: '';
        position: absolute;
        z-index: 999;
        top: 0;
        left: 0;
        display: inline-block;
        overflow: hidden;
        width: 85px;
        height: 85px;
        border-radius: 85px;
        background-repeat: no-repeat;
        background-image: url(/images/findcar_ico_sprite.png);
        background-position: 26.7786% 7.4059%;
        background-size: 600%;
      }

      @media screen and (max-width: 767px) {
        background-color: rgba(98, 121, 150, 0.8);
      }

      @media screen and (min-width: 768px) {
        content: '';
        position: absolute;
        z-index: 999;
        top: 0;
        left: 0;
        display: inline-block;
        overflow: hidden;
        margin-bottom: 30px;
        width: 170px;
        height: 170px;
        border-radius: 85px;
        background-repeat: no-repeat;
        background-image: url(/images/findcar_ico_sprite.png);
        background-position: 26.7786% 7.4059%;
        background-size: 600%;
      }
      @media screen and (min-width: 768px) {
        background-color: rgba(98, 121, 150, 0.8);
      }
    }

    @media screen and (min-width: 768px) {
      position: relative;
      display: block;
      width: 170px;
      height: 170px;
      border-radius: 85px;
      margin: 0 0 30px;
      text-indent: -9999px;
    }

    @media screen and (max-width: 767px) {
      display: inline-block;
      overflow: hidden;
      background-repeat: no-repeat;
      background-image: url(/images/findcar_ico_sprite.png);
    }

    @media screen and (max-width: 767px) {
      position: relative;
      width: 85px;
      height: 85px;
      margin: 0 auto 15px;
      border-radius: 85px;
      text-indent: -999em;
      background-repeat: no-repeat;
    }
  `,
  InfoSelect: styled.div``,
  B: styled.b`
    @media screen and (min-width: 768px) {
      display: block;
      font-family: 'HyundaiSansHeadKR';
      font-size: 24px;
      letter-spacing: -0.4px;
      color: #000;
      line-height: 1;
      font-weight: 400;
    }
  `,
};
