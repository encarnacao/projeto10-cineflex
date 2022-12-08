import Main from "./components/Main";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import { useState } from "react";

function App() {
  const [selected,setSelected] = useState([]);
  return (
    <div className="App">
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main setSelected={setSelected}/>} />
          <Route path="/sessoes/:movieId" element={<Sessions setSelected={setSelected}/>} />
          <Route path="/assentos/:sessionId" element={<Seats selected={selected} setSelected={setSelected}/>} />
        </Routes>
      </BrowserRouter>
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
