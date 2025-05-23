import { ThemeProvider } from './context'
import { Header } from './components/pokemons/header'
import { AppRoutes } from './pages/routes'
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Header />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  #root {
    max-width: 100vw;
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-weight: 400;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }
`

export default App