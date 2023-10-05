import React, { createContext, useContext, useMemo, useState } from 'react';

type LoadingContextProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<LoadingContextProps>({
  loading: false,
  setLoading: () => undefined,
});

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  const value = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading, setLoading],
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export const useLoadingProvider = () => useContext(MenuContext);
