import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import PageTitleProvider from "contexts/page-title-context";
import theme from "./theme";
import GlobalStyles from './globalStyles';

type ProvidersProps = {
  children: ReactNode
}

function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageTitleProvider>
        {children}
      </PageTitleProvider>
    </ThemeProvider>
  )
}

export default Providers;
