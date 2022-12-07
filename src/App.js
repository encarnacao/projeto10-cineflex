import Main from "./components/Main";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Main />
    </div>
  );
}

const Header = styled.header`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    > h1{
        color: #e8833a;
        font-size: 34px;
    }
`;


export default App;
