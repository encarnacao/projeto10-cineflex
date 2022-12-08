import styled from "styled-components";
import { StyledButton, StyledDiv } from "../styles/GlobalStyles";
import MovioInfo from "./MovieInfo";
import ReservationForm from "./ReservationForm";

export default function Seats() {
    const MOCKSEATS = {
        "id": 1,
        "name": "15:00",
        "day": {
            "id": 24062021,
            "weekday": "Quinta-feira",
            "date": "24/06/2021",
        },
        "movie": {
            "id": 1,
            "title": "2067",
            "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            "releaseDate": "2020-10-01T00:00:00.000Z",
        },
        "seats": [
            {
                "id": 1,
                "name": "1",
                "isAvailable": false,
            },
            {
                "id": 2,
                "name": "2",
                "isAvailable": true,
            },
            {
                "id": 3,
                "name": "3",
                "isAvailable": true,
            },
            {
                "id": 4,
                "name": "4",
                "isAvailable": true,
            },
            {
                "id": 5,
                "name": "5",
                "isAvailable": true,
            },
            {
                "id": 6,
                "name": "6",
                "isAvailable": true,
            },
            {
                "id": 7,
                "name": "7",
                "isAvailable": true,
            },
            {
                "id": 8,
                "name": "8",
                "isAvailable": true,
            },
            {
                "id": 9,
                "name": "9",
                "isAvailable": true,
            },
            {
                "id": 10,
                "name": "10",
                "isAvailable": true,
            },
            {
                "id": 11,
                "name": "11",
                "isAvailable": true,
            },
            {
                "id": 12,
                "name": "12",
                "isAvailable": true,
            },
            {
                "id": 13,
                "name": "13",
                "isAvailable": true,
            },
            {
                "id": 14,
                "name": "14",
                "isAvailable": true,
            },
            {
                "id": 15,
                "name": "15",
                "isAvailable": true,
            },
            {
                "id": 16,
                "name": "16",
                "isAvailable": true,
            },
            {
                "id": 17,
                "name": "17",
                "isAvailable": true,
            },
            {
                "id": 18,
                "name": "18",
                "isAvailable": true,
            },
            {
                "id": 19,
                "name": "19",
                "isAvailable": true,
            },
            {
                "id": 20,
                "name": "20",
                "isAvailable": true,
            },
            {
                "id": 21,
                "name": "21",
                "isAvailable": true,
            },
            {
                "id": 22,
                "name": "22",
                "isAvailable": true,
            },
            {
                "id": 23,
                "name": "23",
                "isAvailable": true,
            },
            {
                "id": 24,
                "name": "24",
                "isAvailable": true,
            },
            {
                "id": 25,
                "name": "25",
                "isAvailable": true,
            },
            {
                "id": 26,
                "name": "26",
                "isAvailable": true,
            },
            {
                "id": 27,
                "name": "27",
                "isAvailable": true,
            },
            {
                "id": 28,
                "name": "28",
                "isAvailable": true,
            },
            {
                "id": 29,
                "name": "29",
                "isAvailable": true,
            },
            {
                "id": 30,
                "name": "30",
                "isAvailable": true,
            },
            {
                "id": 31,
                "name": "31",
                "isAvailable": true,
            },
            {
                "id": 32,
                "name": "32",
                "isAvailable": true,
            },
            {
                "id": 33,
                "name": "33",
                "isAvailable": true,
            },
            {
                "id": 34,
                "name": "34",
                "isAvailable": true,
            },
            {
                "id": 35,
                "name": "35",
                "isAvailable": true,
            },
            {
                "id": 36,
                "name": "36",
                "isAvailable": true,
            },
            {
                "id": 37,
                "name": "37",
                "isAvailable": true,
            },
            {
                "id": 38,
                "name": "38",
                "isAvailable": true,
            },
            {
                "id": 39,
                "name": "39",
                "isAvailable": true,
            },
            {
                "id": 40,
                "name": "40",
                "isAvailable": true,
            },
            {
                "id": 41,
                "name": "41",
                "isAvailable": true,
            },
            {
                "id": 42,
                "name": "42",
                "isAvailable": true,
            },
            {
                "id": 43,
                "name": "43",
                "isAvailable": true,
            },
            {
                "id": 44,
                "name": "44",
                "isAvailable": true,
            },
            {
                "id": 45,
                "name": "45",
                "isAvailable": true,
            },
            {
                "id": 46,
                "name": "46",
                "isAvailable": true,
            },
            {
                "id": 47,
                "name": "47",
                "isAvailable": true,
            },
            {
                "id": 48,
                "name": "48",
                "isAvailable": true,
            },
            {
                "id": 49,
                "name": "49",
                "isAvailable": true,
            },
            {
                "id": 50,
                "name": "50",
                "isAvailable": true,
            },
        ]
    }
    return (
        <>
            <StyledDiv>
                <h1>Selecione o(s) assento(s)</h1>
                <SeatsDiv>
                    {MOCKSEATS.seats.map((seat) => (<SeatButton key={seat.id} disabled={!seat.isAvailable}>{seat.name}</SeatButton>))}
                </SeatsDiv>
                <Legend>
                    <div>
                        <Selected></Selected>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <SeatButton></SeatButton>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <SeatButton disabled></SeatButton>
                        <p>Indisponível</p>
                    </div>
                </Legend>
                <FormDiv>
                    <ReservationForm />
                    <StyledButton width="225px" height="42px">Reservar assento(s)</StyledButton>
                </FormDiv>

            </StyledDiv>
            <MovioInfo posterURL={MOCKSEATS.movie.posterURL} title={MOCKSEATS.movie.title} weekday={MOCKSEATS.day.weekday} time={MOCKSEATS.name} />
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

const SeatButton = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid #808F9D;
    background-color: #c3cfd9;
    margin: 0px 3px;
    text-align: center;
    font-size: 11px;
    cursor: pointer;
    &:disabled{
        background: #FBE192;
        border: 1px solid #F7C52B;
        color: #000;
    }
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

const Selected = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid #808F9D;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
`;

const FormDiv = styled.div`
    width: 100%;
    padding: 0 25px;
    margin-top: 40px;
    > button{
        margin: 20px auto; 
    }
`;