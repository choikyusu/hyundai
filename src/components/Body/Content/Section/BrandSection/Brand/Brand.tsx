import Link from 'next/link';
import { styled } from 'styled-components';

interface BrandProps {
  barnd: BrandType;
}

export const Brand = ({ barnd }: BrandProps) => {
  return (
    <div>
      <Styled.Link href={barnd.pageUrl}>
        <Styled.Image src={barnd.imageUrl} />
        <Styled.TextWrapper>
          <Styled.Title>{barnd.title.text}</Styled.Title>
          <Styled.Text>{barnd.subText.text}</Styled.Text>
        </Styled.TextWrapper>
      </Styled.Link>
    </div>
  );
};

const Styled = {
  Link: styled(Link)`
    overflow: hidden;
    display: block;
    color: #fff;
    font-size: 0;

    color: #000;
  `,
  Image: styled.img`
    width: 100%;
    height: auto;
  `,
  TextWrapper: styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 20px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 18px;
    letter-spacing: -0.24px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    opacity: 0;

    position: static;
    max-width: 405px;
    margin-top: 0;
    padding: 0;
    text-align: left;
    color: #000;
    opacity: 1;

    color: #000;
}
  `,
  Title: styled.h3`
    margin-top: 15px;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.4px;
    font-family: 'HyundaiSansHeadKR';
  `,
  Text: styled.div`
    font-family: 'HyundaiSansHeadKRR';
    margin: 5px 0 0;
    font-size: 16px;

    display: block;
    margin-top: 6px;
    font-family: 'HyundaiSansTextKRR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;
    word-break: keep-all;
  `,
};
