import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { StyledButton, StyledDiv } from "../styles/GlobalStyles";
import MovioInfo from "./MovieInfo";
import ReservationForm from "./ReservationForm";
import Seat from "./Seat";
import Loading from "./Loading";

export default function Seats({ selected, setSelected, seatsNumbers, setSeatsNumbers, setMovieInfo, reservation, setReservation, setBack }) {
    const params = useParams();
    const [seats,setSeats] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        //Clear data
        setReservation(undefined);
        setSelected([]);
        setSeatsNumbers([]);
        /*--------------------*/
        setBack(1);
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.sessionId}/seats`)
            .then(resp => {
                setSeats(resp.data);
                setMovieInfo({
                    title: resp.data.movie.title,
                    date: resp.data.day.date,
                    time: resp.data.name
                });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(seats === undefined || loading === true) {
        return <Loading />;
    }

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        console.log(reservation);
        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", reservation)
            .then(()=>{
                navigate("/sucesso");
                setLoading(false);
            })
            .catch(()=>{
                setLoading(false);
                navigate("/error");
            });

    }


    return (
        <>
            <StyledDiv>
                <h1>Selecione o(s) assento(s)</h1>
                <SeatsDiv>
                    {seats.seats.map((seat) => (<Seat 
                    selected={selected} 
                    setSelected={setSelected} 
                    reservation={reservation} 
                    setReservation={setReservation} 
                    id={seat.id} 
                    name={seat.name} 
                    seatsNumbers={seatsNumbers}
                    setSeatsNumbers={setSeatsNumbers}
                    isAvailable={seat.isAvailable} 
                    key={seat.id} />))}
                </SeatsDiv>
                <Legend>
                    <div>
                        <MockSeat backgroundColor="#1AAE9E;" borderColor="#0E7D71;"></MockSeat>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <MockSeat backgroundColor="#c3cfd9;" borderColor="#808F9D;"></MockSeat>
                        <p>Dispon??vel</p>
                    </div>
                    <div>
                        <MockSeat disabled></MockSeat>
                        <p>Indispon??vel</p>
                    </div>
                </Legend>
                <form onSubmit={handleSubmit}>
                    <ReservationForm reservation={reservation} setReservation={setReservation}/>
                    <StyledButton data-test="book-seat-btn" type="submit" width="225px" height="42px">Reservar assento(s)</StyledButton>
                </form>

            </StyledDiv>
            <MovioInfo posterURL={seats.movie.posterURL} title={seats.movie.title} weekday={seats.day.weekday} time={seats.name} />
        </>
    );
}

const SeatsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: min(100vw,400px);
    height: 190px;
    padding: 0 25px;
    margin: 20px auto;
    align-items: flex-start;
    justify-content: space-between;
`;

const Legend = styled.div`
    display: flex;
    justify-content: space-between;
    width: 275px;
    > div{
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 50px;
        justify-content: space-between;
        color: #4E5A65;
        font-size: 13px;
    }
`;

const MockSeat = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${props => props.backgroundColor};
    border: 1px solid ${props => props.borderColor};
    &:disabled{
        background: #FBE192;
        border: 1px solid #F7C52B;
        color: #000;
    }
`;

