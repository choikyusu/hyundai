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
  `,
  Input: styled(CommonStyled.Input)`
    position: relative;
    width: calc(100% - 68px);
    height: 100%;
    color: #fff;
    border: 0;
    background: none;
  `,
  DeleteButton: styled(CommonStyled.Button)`
    svg {
      width: 18px;
      height: 18px;
    }
  `,
  SearchButton: styled(CommonStyled.Button)`
    svg {
      width: 18px;
      height: 18px;
    }
  `,
};
