import { CommonStyled } from '@/src/styles/CommonStyled';
import { MdOutlineCancel } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import { styled } from 'styled-components';

interface UnifiedSearchProps {
  searchKeyword: string;
  onChangeKeyword: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UnifiedSearch = ({
  searchKeyword,
  onChangeKeyword,
}: UnifiedSearchProps) => {
  return (
    <Styled.InputWrapper>
      <Styled.Input
        type="text"
        title="통합 검색어 입력"
        placeholder="검색어를 입력해주세요"
        value={searchKeyword}
        onChange={onChangeKeyword}
      />
      <Styled.DeleteButton type="button">
        <MdOutlineCancel />
      </Styled.DeleteButton>
      <Styled.SearchButton type="submit">
        <RiSearchLine />
      </Styled.SearchButton>
    </Styled.InputWrapper>
  );
};

const Styled = {
  InputWrapper: styled.div`
    @media screen and (max-width: 767px) {
      padding: 10px 15px;
      position: relative;
      width: 100%;
      height: 60px;
      font-size: 13px;
      line-height: 21px;
      letter-spacing: -0.4px;
      background: #007fa8;
      display: flex;
      justify-content: space-between;

      ::placeholder {
        color: #fff;
        font-size: 13px;
      }
    }

    @media screen and (min-width: 768px) {
      padding: 0 !important;

      ::placeholder {
        font-size: 20px;
      }
    }

    @media screen and (min-width: 768px) {
      width: 570px;
      margin: 20px auto;
      position: relative;
      padding: 5px 0;
      background-color: #fff;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      padding: 5px 0;
      background-color: #fff;
    }
  `,
  Input: styled(CommonStyled.Input)`
    @media screen and (max-width: 767px) {
      position: relative;
      width: calc(100% - 68px);
      height: 100%;
      color: #fff;
      border: 0;
      background: none;

      height: 50px;
      border-bottom-color: none;

      width: calc(100% - 90px) !important;
      padding: 0 0 0 20px;
      border: none;
      font-size: 20px;
    }

    @media screen and (min-width: 768px) {
      width: calc(100% - 90px) !important;
      border: none;
      font-family: 'HyundaiSansHeadKRR';
      font-size: 20px;
    }
  `,
  DeleteButton: styled(CommonStyled.Button)`
    @media screen and (max-width: 767px) {
      svg {
        width: 18px;
        height: 18px;
      }
    }

    @media screen and (min-width: 768px) {
      width: 44px;
      height: 44px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  `,
  SearchButton: styled(CommonStyled.Button)`
    @media screen and (max-width: 767px) {
      svg {
        width: 18px;
        height: 18px;
      }
    }

    @media screen and (min-width: 768px) {
      width: 44px;
      height: 44px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  `,
};
