import React, { createContext, useContext, useMemo, useState } from 'react';

type MenuContextProps = {
  headerType: HeaderMenuType;
  setHeaderType: React.Dispatch<React.SetStateAction<HeaderMenuType>>;
};

const MenuContext = createContext<MenuContextProps>({
  headerType: 'None',
  setHeaderType: () => undefined,
});

export default function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerType, setHeaderType] = useState<HeaderMenuType>('None');

  const value = useMemo(
    () => ({
      headerType,
      setHeaderType,
    }),
    [headerType, setHeaderType],
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export const useMenuProvider = () => useContext(MenuContext);
