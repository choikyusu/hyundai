import { ElCarousel } from '@/src/components/common/ElCarousel/ElCarousel';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { CSSProp, css, styled } from 'styled-components';
import { Model } from './Model/Model';
import { ageBaseModelList } from './data/data';
import { useState } from 'react';

export const ModelSection = () => {
  const [modelList, setModelList] = useState<ModelType[]>(
    ageBaseModelList[0].modelList,
  );

  const onClickAge = (modelList: ModelType[]) => {
    setModelList(modelList);
  };

  return (
    <Styled.SectionWrapper>
      <Styled.Title>Model</Styled.Title>
      <Styled.TitleTail>
        최근 한 달 동안 고객들이 가장 많이 구매하신 모델입니다.
      </Styled.TitleTail>
      <Styled.ModelWrap>
        <div>
          <Styled.TabMenu>
            <Styled.IconWrapper>
              {ageBaseModelList.map(ageBasedModel => (
                <Styled.Icon
                  onClick={() => onClickAge(ageBasedModel.modelList)}
                >
                  <Styled.Button $active={VARIANT_STYLE.Active}>
                    <span>{ageBasedModel.text}</span>
                  </Styled.Button>
                </Styled.Icon>
              ))}
            </Styled.IconWrapper>
          </Styled.TabMenu>
        </div>
        <ElCarousel type="ModelSection" isAutoSlide={false}>
          {modelList.map(model => (
            <Model model={model} />
          ))}
        </ElCarousel>
      </Styled.ModelWrap>
    </Styled.SectionWrapper>
  );
};

const VARIANT_STYLE = {
  Active: css`
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    letter-spacing: 0.016px;
    color: #007fa8;
  `,
};

const Styled = {
  SectionWrapper: styled.div`
    max-width: 1640px;
    margin: 0 auto;
    padding: 140px 0 0 !important;
    text-align: center;

    padding: 70px 0 0 !important;

    text-align: center;
  `,
  Title: styled.h2`
    font-family: 'HyundaiSansHeadKR';
    font-size: 27px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.4px;
  `,
  TitleTail: styled.p`
    color: #666;

    margin: 12px 0 0;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;
  `,
  ModelWrap: styled.div`
    position: relative;
    min-width: 1120px;

    min-width: auto;
    margin: 35px 0 0;
  `,
  TabMenu: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;

    justify-content: space-between;

    flex-direction: column;
  `,
  IconWrapper: styled.ul`
    display: flex;

    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 16px;
  `,
  Icon: styled.li`
    position: relative;
    padding: 0;
  `,
  Button: styled(CommonStyled.Button)<{ $active?: CSSProp }>`
    display: flex;

    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    letter-spacing: 0;
    color: #666;
    line-height: 22px;
    font-weight: 500;
    background: #444;

    ${props => props.$active}
  `,
};
