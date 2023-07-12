import { TabArea } from './TabArea/TabArea';

import { Dim } from './Dim/Dim';
import { useHeader } from './useHeader';
import { MainHeader } from './MainHeader/MainHeader';

export const Header = () => {
  const { headerType, onClickType } = useHeader();

  return (
    <TabArea>
      <Dim isShow={headerType !== 'None'} />
      <MainHeader headerType={headerType} onClickType={onClickType} />
    </TabArea>
  );
};
