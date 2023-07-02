import { GlobalStyle, GridContainer } from "./global-styles.ts";
import { Header } from "./Components/header/header/header.tsx";

function App() {
  
  return (
    <>
      <GlobalStyle/>
      <GridContainer>
        <Header/>
      </GridContainer>
    </>
  )
}

export default App
