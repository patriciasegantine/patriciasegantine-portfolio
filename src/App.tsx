import { GlobalStyle } from "./global.styles.ts";
import { MainContent } from "./main/main-content.tsx";
import styled from "styled-components";
import { Header } from "./components/header/header.tsx";

function App() {
  
  const Container = styled.div`
    height: 100vh;
  `
  
  return (
    <Container>
      <GlobalStyle/>
      <Header/>
      <MainContent/>
    </Container>
  )
}

export default App
