import { Container } from './components/container'
import { ThemeProvider } from './components/theme-context'
import { BrowserRouter } from "react-router-dom"
import { Header } from './components/templates/organisms/pageHeader'
import { AppRoutes } from './pages/routes'
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
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

  html {
    height: 100%;
  }

  @media (min-width: 1281px) {
    h1, h2 {
      font-size: 2rem;
    }

    h3, p {
      font-size: 1.2rem;
    }

    span, button {
      font-size: 1rem;
    }
  }
`

export default App