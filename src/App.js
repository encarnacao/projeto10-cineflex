import Main from "./components/Main";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import { useState } from "react";
import Success from "./components/Success";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ErrorScreen from "./components/ErrorScreen";

function App() {
  const [selected, setSelected] = useState([]);
  const [back, setBack] = useState(0);
  const [movieInfo, setMovieInfo] = useState(undefined);
  const [reservation, setReservation] = useState(undefined);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header>
        <BackButton data-test="go-home-header-btn" display={back} onClick={()=>navigate(-1)}/>
        <h1>CINEFLEX</h1>
      </Header>
      <Routes>
        <Route path="/" element={<Main setSelected={setSelected} setBack={setBack} />} />
        <Route path="/sessoes/:movieId" element={<Sessions setSelected={setSelected} setBack={setBack} />} />
        <Route path="/assentos/:sessionId" element={<Seats selected={selected} setMovieInfo={setMovieInfo} reservation={reservation} setReservation={setReservation} setSelected={setSelected} setBack={setBack} />} />
        <Route path="/sucesso" element={<Success reservation={reservation} info={movieInfo} setBack={setBack} />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
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

const BackButton = styled(IoArrowBackCircleOutline)`
    position: fixed;
    top: 15px;
    left: 20px;
    color: #1e223a;
    font-size: 40px;
    cursor: pointer;
    display: ${props => props.display ? "block" : "none"}
`;

export default App;


