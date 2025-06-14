import { Container } from './components/container'
import { ThemeProvider } from './components/theme-context'
import { Header } from './components/templates/organisms/pageHeader'
import { AppRoutes } from './pages/routes'
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Container>
        <Header />
        <AppRoutes />
      </Container>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: black;
  }
`

export default App