import { ElCarousel } from '@/src/components/common/ElCarousel/ElCarousel';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { Model } from './Model/Model';
import { ageBaseModelList } from './data/data';
import { useModelSection } from './useModelSection';
import { CommonSection } from '../CommonSection';

export const ModelSection = () => {
  const { onClickAge, isActive, modelList } = useModelSection();

  const config: ElCarouselConfigType = {
    showArrow: { small: true, medium: false, large: false },
    contentCountBySlide: {
      small: { total: 1, cols: 1 },
      medium: { total: 1, cols: 1 },
      large: { total: 3, cols: 3 },
    },
    style: {
      grid: {
        templateColumns: {
          small: 'repeat(1, 1fr)',
          medium: 'repeat(1, 1fr)',
          large: '2fr 1fr 1fr',
        },
        gap: {
          small: '2.55%',
          medium: '2.55%',
          large: '2.55%',
        },
        alignItem: 'end',
      },
    },
  };

  return (
    <CommonSection
      title="Model"
      titleTailList={[
        '최근 한 달 동안 고객들이 가장 많이 구매하신 모델입니다.',
      ]}
    >
      <Styled.ModelWrap>
        <div>
          <Styled.TabMenu>
            <Styled.IconWrapper>
              {ageBaseModelList.map((ageBasedModel, index) => (
                <Styled.Icon key={index} onClick={() => onClickAge(index)}>
                  <Styled.Button $isActive={isActive(index)}>
                    <span>{ageBasedModel.text}</span>
                  </Styled.Button>
                </Styled.Icon>
              ))}
            </Styled.IconWrapper>
          </Styled.TabMenu>
        </div>
        <ElCarousel type="ModelSection" config={config}>
          {modelList.map((model, index) => (
            <Model key={index} model={model} />
          ))}
        </ElCarousel>
      </Styled.ModelWrap>
    </CommonSection>
  );
};

const Styled = {
  ModelWrap: styled.div`
    position: relative;
    min-width: 1120px;

    min-width: auto;
    margin: 35px 0 0;

    display: flex;
    flex-direction: column;
    gap: 30px;
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
    gap: 22px;
  `,
  Icon: styled.li`
    position: relative;
    padding: 0;

    &:nth-child(n + 2) {
      &:before {
        position: absolute;
        left: -11px;
        top: 2px;
        display: block;
        content: '';
        width: 1px;
        height: 18px;
        background: #999;
      }
    }
  `,
  Button: styled(CommonStyled.Button)<{ $isActive?: boolean }>`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    letter-spacing: 0;
    color: ${props => (props.$isActive ? '#007fa8' : '#666')};
    line-height: 22px;
    font-weight: 500;
  `,
};
