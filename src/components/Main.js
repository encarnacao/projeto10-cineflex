import { Link } from "react-router-dom";
import { StyledDiv } from "../styles/GlobalStyles";
import styled from "styled-components";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function Main({ setSelected, setBack }) {
    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        //Reset caso volte a página
        setBack(0);
        setSelected([]);
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then(resp => setMovies(resp.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    if (movies === undefined) {
        return <Loading />;
    }

    return (
        <>
            <StyledDiv>
                <h1>Selecione o filme</h1>
                <MovieList>
                    {movies.map((movie) => (
                        <Link to={`/sessoes/${movie.id}`} key={movie.id}>
                            <Movie posterURL={movie.posterURL} title={movie.title} />
                        </Link>
                    ))}
                </MovieList>
            </StyledDiv>
        </>
    );
}

const MovieList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 30px auto 0 auto;
    max-width: 350px;
`;
