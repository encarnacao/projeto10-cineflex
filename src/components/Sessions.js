import styled from "styled-components";
import Movie from "./Movie";
import MovioInfo from "./MovieInfo";
import Session from "./Session";

export default function Sessions() {
    const MOCKSESSIONS = {
        "id": 1,
        "title": "2067",
        "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        "releaseDate": "2020-10-01T00:00:00.000Z",
        "days": [
            {
                "id": 24062021,
                "weekday": "Quinta-feira",
                "date": "24/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 1
                    },
                    {
                        "name": "19:00",
                        "id": 2
                    }
                ]
            },
            {
                "id": 25062021,
                "weekday": "Sexta-feira",
                "date": "25/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 3
                    },
                    {
                        "name": "19:00",
                        "id": 4
                    }
                ]
            },
            {
                "id": 26062021,
                "weekday": "Sábado",
                "date": "26/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 5
                    },
                    {
                        "name": "19:00",
                        "id": 6
                    }
                ]
            },
            {
                "id": 27062021,
                "weekday": "Domingo",
                "date": "27/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 7
                    },
                    {
                        "name": "19:00",
                        "id": 8
                    }
                ]
            },
            {
                "id": 28062021,
                "weekday": "Segunda-feira",
                "date": "28/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 9
                    },
                    {
                        "name": "19:00",
                        "id": 10
                    }
                ]
            },
            {
                "id": 29062021,
                "weekday": "Terça-feira",
                "date": "29/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 11
                    },
                    {
                        "name": "19:00",
                        "id": 12
                    }
                ]
            },
            {
                "id": 30062021,
                "weekday": "Quarta-feira",
                "date": "30/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 13
                    },
                    {
                        "name": "19:00",
                        "id": 14
                    }
                ]
            },
            {
                "id": 1072021,
                "weekday": "Quinta-feira",
                "date": "01/07/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 15
                    },
                    {
                        "name": "19:00",
                        "id": 16
                    }
                ]
            }
        ]
    }

    return (
        <>
            <SessionsDiv>
                <h1>Selecione o horário</h1>
                {MOCKSESSIONS.days.map((day) => (<Session weekday={day.weekday} date={day.date} showtimes={day.showtimes} key={day.id}/>))}
            </SessionsDiv>
            <MovioInfo posterURL={MOCKSESSIONS.posterURL} title={MOCKSESSIONS.title} id={MOCKSESSIONS.id}/>
        </>
    );
}


const SessionsDiv = styled.div`
    width: 100%;
    height: max(100%,75vh);
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    > h1{
        font-size: 24px;
        color: #293845;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`;