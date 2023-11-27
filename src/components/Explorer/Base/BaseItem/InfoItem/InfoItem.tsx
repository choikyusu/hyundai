import React from 'react';
import { styled } from 'styled-components';
import {
  BODY_TYPE_LIST,
  BUDGET_RANGE_LIST,
  FUEL_TYPE_LIST,
} from '../../../data/fuelType.data';

const CONSTANT_TYPE = {
  fuelType: FUEL_TYPE_LIST,
  budgetRange: BUDGET_RANGE_LIST,
  bodyType: BODY_TYPE_LIST,
  passenger: FUEL_TYPE_LIST,
  luggage: FUEL_TYPE_LIST,
};

interface InfoItemProps {
  isQueryExist: boolean;
  item: {
    type: 'fuelType' | 'bodyType' | 'budgetRange' | 'passenger' | 'luggage';
    title: string;
    descList: string[];
    backgroundPosition: string;
    backgroundColor: string;
    link: string;
  };
  subQueryItemList: string[];
  isMerge: boolean;
}

export const InfoItem = ({
  isQueryExist,
  item,
  subQueryItemList,
  isMerge,
}: InfoItemProps) => {
  return !isQueryExist ? (
    <Styled.InfoDec>
      {item.descList.map((desc, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <br />}
          {desc}
        </React.Fragment>
      ))}
    </Styled.InfoDec>
  ) : (
    <Styled.InfoSelectItem>
      {isMerge ? (
        <Styled.InfoSelectDec>
          {subQueryItemList.map(
            (selectItem, index) =>
              `${CONSTANT_TYPE[item.type].find(type => type.id === selectItem)
                ?.name}${index === 0 ? ' ~ ' : ''}`,
          )}
        </Styled.InfoSelectDec>
      ) : (
        subQueryItemList.map(selectItem => (
          <Styled.InfoSelectDec>
            {
              CONSTANT_TYPE[item.type].find(type => type.id === selectItem)
                ?.name
            }
          </Styled.InfoSelectDec>
        ))
      )}
    </Styled.InfoSelectItem>
  );
};

const Styled = {
  InfoSelectDec: styled.div`
    @media screen and (min-width: 768px) {
      display: inline-block;
      min-width: 84px;
      height: 28px;
      padding: 4px 8px;
      margin: 3px 2px;
      border-radius: 20px;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: 20px;
      font-weight: 500;
      background: #414445;
    }

    @media screen and (max-width: 767px) {
      display: inline-block;
      min-width: 50px;
      height: 20px;
      padding: 0 12px;
      margin: 3px 2px;
      border-radius: 10px;
      font-family: 'HyundaiSansTextKR';
      font-size: 11px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: 20px;
      font-weight: 500;
      background: #414445;
    }
  `,
  InfoSelectItem: styled.li``,
  InfoDec: styled.div`
    @media screen and (max-width: 767px) {
      font-size: 13px;
      color: #666;
      margin-top: 12px;
      line-height: 22px;
    }

    @media screen and (min-width: 768px) {
      margin-top: 20px;
      margin-bottom: 50px;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      letter-spacing: -0.4px;
      color: #666;
      line-height: 25px;
    }
  `,
};
