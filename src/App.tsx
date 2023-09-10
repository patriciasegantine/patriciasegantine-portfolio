import { GlobalStyle } from "./global.styles.ts";
import { MainContent } from "./main/main-content.tsx";
import styled from "styled-components";
import { Header } from "./components/header/header.tsx";
import { Footer } from "./components/footer/footer.tsx";

function App() {
  
  const Container = styled.div`
    height: 100vh;
  `
  
  return (
    <Container>
      <GlobalStyle/>
      <Header/>
      <MainContent/>
      <Footer/>
    </Container>
  )
}

export default App
