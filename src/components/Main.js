import styled from "styled-components";
import Movie from "./Movie";

export default function Main() {
    const MOCKMOVIES = [
        {
            id: 1,
            title: "2067",
            posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            releaseDate: "2020-10-01T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 3,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        }
    ];

    return (
        <>
            <MovieSelectionDiv>
                <h1>Selecione o filme</h1>
                <MovieList>
                    {MOCKMOVIES.map((movie) => <Movie posterURL={movie.posterURL} title={movie.title} id={movie.id} key={movie.id}  />)}
                </MovieList>
            </MovieSelectionDiv>
        </>
    );
}
const MovieSelectionDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    > h1{
        font-size: 24px;
        color: #293845;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`;

const MovieList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
