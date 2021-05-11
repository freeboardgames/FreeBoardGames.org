/* eslint-disable react/prop-types */
import { ThemeProvider as UIThemeProvider, useTheme } from '@material-ui/core/styles';
import theme from 'infra/common/components/base/theme';
import React, { useEffect } from 'react';

const paletteColors = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];

function Provider({ children }): JSX.Element {
  const theme = useTheme();

  useEffect(() => {
    paletteColors.forEach((name) => {
      Object.entries<string>(theme.palette[name]).forEach(([variant, hex]) => {
        document.querySelector<HTMLElement>(':root').style.setProperty(`--theme-palette-${name}-${variant}`, hex);
      });
    });
  }, []);

  return <>{children}</>;
}

export function ThemeProvider({ children }) {
  return (
    <UIThemeProvider theme={theme}>
      <Provider>{children}</Provider>
    </UIThemeProvider>
  );
}
