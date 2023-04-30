import styled from "styled-components"
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import Body from "./components/Body"


const AppContainer = styled.div`
  height: fit-content;
  width: 100%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 85px;
  column-gap: 40px;

`

function App() {

  return (
    <>
      <AppContainer>
        <NavBar></NavBar>
        <SideBar></SideBar>
        <Body></Body>

      </AppContainer>
      
     
    </>
  )
}

export default App
