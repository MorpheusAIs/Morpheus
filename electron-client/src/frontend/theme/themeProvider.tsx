import React, { ReactNode, createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './theme';

export const ThemeContext = createContext({
  isDarkTheme: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children?: ReactNode;
}

export default ({ children }: ThemeProviderProps) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme: dark,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
