import { styled } from 'styled-components';
import { RadioButton } from '../../common/RadioButton/RadioButton';
import { Dispatch, SetStateAction } from 'react';

interface TitleInfoProps {
  agencyList: AgencyResponse | null;
  setAgencyTypeCode: Dispatch<SetStateAction<number | undefined>>;
}

export const TitleInfo = ({
  agencyList,
  setAgencyTypeCode,
}: TitleInfoProps) => {
  return (
    <Styled.TitleInfo>
      <Styled.H3>
        검색결과 총<Styled.H3Span>{agencyList?.total}</Styled.H3Span>건
      </Styled.H3>
      <Styled.RadioGroupWrap>
        <Styled.RadioGroup>
          <RadioButton
            radioId="all"
            radioText={`전체(${agencyList?.total || ''})`}
            onClick={() => setAgencyTypeCode(undefined)}
          />
          <RadioButton
            radioId="branch"
            radioText={`지점(${agencyList?.branchCount || ''})`}
            onClick={() => setAgencyTypeCode(1)}
          />
          <RadioButton
            radioId="agency"
            radioText={`대리점(${agencyList?.agencyCount || ''})`}
            onClick={() => setAgencyTypeCode(2)}
          />
        </Styled.RadioGroup>
      </Styled.RadioGroupWrap>
    </Styled.TitleInfo>
  );
};

const Styled = {
  TitleInfo: styled.div`
    @media screen and (min-width: 768px) {
      padding: 30px;
      text-align: center;
      border-top: 1px solid #e4dcd3;
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      padding: 15px;
    }
  `,
  H3: styled.h3`
    @media screen and (min-width: 768px) {
      margin-bottom: 30px;
      font-family: 'HyundaiSansHeadKR';
      font-size: 20px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: -0.4px;
    }
  `,
  H3Span: styled.span`
    @media screen and (min-width: 768px) {
      color: #007fa8;
    }
  `,
  RadioGroupWrap: styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-right: 30px;

    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;

    @media screen and (min-width: 768px) {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      margin-right: 0;
    }
  `,
  RadioGroup: styled.div`
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0;

    @media screen and (min-width: 768px) {
      display: flex;
    }
  `,
};
