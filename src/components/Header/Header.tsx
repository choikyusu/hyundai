import { TabArea } from './TabArea/TabArea';

import { Dim } from './Dim/Dim';
import { useHeader } from './useHeader';
import { MainHeader } from './MainHeader/MainHeader';
import { styled } from 'styled-components';

export const Header = () => {
  const { scrollPercentage, onClickType } = useHeader();

  return (
    <TabArea>
      <Dim />
      <Styled.NavigationBar $scrollPercentage={scrollPercentage} />
      <MainHeader
        onClickType={onClickType}
        isMovedScroll={scrollPercentage > 0}
      />
    </TabArea>
  );
};

interface NavigationBarProps {
  $scrollPercentage: number;
}

const Styled = {
  NavigationBar: styled.div.attrs<NavigationBarProps>(props => ({
    style: {
      width: `${props.$scrollPercentage}%`,
    },
  }))`
    @media screen and (max-width: 767px) {
      position: fixed;
      top: 0;
      left: 0;
      display: block;
      width: 0;
      height: 5px;
      background-color: #007fa8;
      z-index: 99999;
    }

    @media screen and (min-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99999;
      display: block;
      width: 0;
      height: 5px;
      background-color: #007fa8;
      transition: 0.2s linear;
    }
  `,
};
