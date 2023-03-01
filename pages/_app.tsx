import type { AppProps } from 'next/app'
import { Provider as StoreProvider } from 'react-redux'; // Custom RDX Provider
import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/defaults/globalstyles'
import { store } from '../store/index'

const theme: DefaultTheme = {
  colors: {
    primary: '#2F2E41',
    secondary: '#FFFFFF',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
    </>
  )
}
