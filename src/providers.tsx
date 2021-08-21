import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from './globalStyles';

type ProvidersProps = {
  children: ReactNode
}

function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Providers;
