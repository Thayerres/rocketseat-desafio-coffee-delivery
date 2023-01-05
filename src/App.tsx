import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ShoppingCartProvider } from './contexts/ShoppingCart'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
