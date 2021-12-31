import { ReactNode, useReducer } from "react";
import styled, { ThemeProvider } from "styled-components";
import PageTitleProvider from "contexts/page-title-context";
import Button from 'components/Button';
import defaultTheme from "./theme";
import themes from './theme/themes.json';
import GlobalStyles from './globalStyles';

type ProvidersProps = {
  children: ReactNode
}

const ThemeButton = styled(Button)`
  margin: ${({ theme }) => theme.sizes.toRem(10)};
`

function Providers({ children }: ProvidersProps) {
  const [theme, switchTheme] = useReducer((prevTheme: typeof defaultTheme) => {
    const currTheme = themes[prevTheme.name === 'light' ? 'dark' : 'light'];

    return {
      ...prevTheme,
      ...currTheme,
      colors: {
        ...prevTheme.colors,
        ...currTheme.colors
      }
    }
  }, defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageTitleProvider>
        <ThemeButton 
          variant="outlined"
          color="primary"
          onClick={() => switchTheme()}
        >
          Theme Switch: {theme.name}
        </ThemeButton>
        {children}
      </PageTitleProvider>
    </ThemeProvider>
  )
}

export default Providers;
