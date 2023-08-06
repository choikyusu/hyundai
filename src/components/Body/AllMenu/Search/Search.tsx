import { CommonStyled } from '@/src/styles/CommonStyled';
import { ChangeEvent } from 'react';
import { styled } from 'styled-components';

interface SearchProps {
  keyword: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ keyword, onChange }: SearchProps) => {
  return (
    <Styled.TitleWrap>
      <Styled.InputWrap>
        <Styled.SearchInput>
          <Styled.ElInput
            placeholder="검색어를 입력해 주세요."
            onChange={onChange}
            value={keyword}
          />
          <Styled.SearchButton />
        </Styled.SearchInput>
      </Styled.InputWrap>
    </Styled.TitleWrap>
  );
};

const Styled = {
  TitleWrap: styled.section`
    width: 100%;
    height: 248px;
    background-color: transparent;
  `,
  InputWrap: styled.div`
    margin: 0 auto;
    padding: 80px 0 0;
    width: 48.58%;
    min-width: 480px;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  `,
  SearchInput: styled.div`
    position: relative;
    display: inline-block;
    width: 100%;

    font-family: 'HyundaiSansTextKR';
  `,
  ElInput: styled.input`
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    height: 40px;
    padding: 0 20px;
    border: 1px solid #e4dcd3;
    background: #fff;
    box-sizing: border-box;
    border-radius: 0;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 100%;

    padding: 0 20px;
    width: 100%;
    height: 60px;
    font-family: 'HyundaiSansHeadKRR';
    font-size: 21px;
    font-weight: 400;
    line-height: 1;
    font-size: 20px;
    letter-spacing: -0.4px;
    color: #767676;
    text-align: center;
    border: 0;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
    background-color: transparent;
  `,
  SearchButton: styled(CommonStyled.Button)`
    @media screen and (min-width: 768px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 50px;
      border: 0;
      background: #002c5f;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.4px;
      color: #fff;
      cursor: pointer;
    }

    @media screen and (min-width: 768px) {
      width: auto;
      height: auto;
      border-radius: 0;
      color: #000;
      background-color: transparent;
    }

    position: absolute;
    right: 0;
    bottom: 12px;
    padding: 0;
    font-family: 'HyundaiSansTextKR';
    font-size: 12px;
    line-height: 0;
    letter-spacing: 0.288px;
    color: #fff;
  `,
};
