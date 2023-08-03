import React, { createContext, useContext, useMemo, useState } from 'react';

type MenuContextProps = {
  isOpenMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextProps>({
  isOpenMenu: false,
  setOpenMenu: () => undefined,
});

export default function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      isOpenMenu,
      setOpenMenu,
    }),
    [isOpenMenu, setOpenMenu],
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export const useMenuProvider = () => useContext(MenuContext);
