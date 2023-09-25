import { GlobalStyle, muiTheme } from "./global.styles.ts";
import { MainContent } from "./main/main-content.tsx";
import styled from "styled-components";
import { Header } from "./components/header/header.tsx";
import { Footer } from "./components/footer/footer.tsx";
import { ThemeProvider } from "@mui/material";
import { MainProvider } from "./context/main-context.tsx";

function App() {
  
  const Container = styled.div`
    height: 100vh;
  `
  return (
    <ThemeProvider theme={muiTheme}>
      <MainProvider>
        <Container>
          <GlobalStyle/>
          <Header/>
          <MainContent/>
          <Footer/>
        </Container>
      </MainProvider>
    </ThemeProvider>
  )
}

export default App
