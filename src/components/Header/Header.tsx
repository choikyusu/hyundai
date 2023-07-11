import { TabArea } from './TabArea/TabArea';

import { Dim } from './Dim/Dim';
import { useHeader } from './useHeader';
import { MainHeader } from './MainHeader/MainHeader';

export const Header = () => {
  const { isSearchClicked, onSearchClick } = useHeader();

  return (
    <TabArea>
      <Dim isShow={isSearchClicked} />
      <MainHeader
        isSearchClicked={isSearchClicked}
        onSearchClick={onSearchClick}
      />
    </TabArea>
  );
};
