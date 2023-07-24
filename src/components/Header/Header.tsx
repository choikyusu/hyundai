import { TabArea } from './TabArea/TabArea';

import { Dim } from './Dim/Dim';
import { useHeader } from './useHeader';
import { MainHeader } from './MainHeader/MainHeader';
import { styled } from 'styled-components';

export const Header = () => {
  const { scrollPercentage, headerType, onClickType } = useHeader();

  return (
    <TabArea>
      <Dim isShow={headerType !== 'None'} />
      <Styled.NavigationBar $scrollPercentage={scrollPercentage} />
      <MainHeader
        headerType={headerType}
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
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    height: 5px;
    background-color: #007fa8;
    z-index: 99999;
  `,
};
