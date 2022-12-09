import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledDiv } from "../styles/GlobalStyles";
import Loading from "./Loading";
import MovioInfo from "./MovieInfo";
import Session from "./Session";

export default function Sessions({ setSelected, setBack }) {
    const [sessions,setSessions] = useState(undefined);
    const params = useParams();
    useEffect(() => {
        setBack(1);
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.movieId}/showtimes`)
            .then(resp => setSessions(resp.data));
        //Reset caso volte a página
        setSelected([]); 
    }, [setSelected]);

    if (sessions === undefined) {
        return <Loading />;
    }


    return (
        <>
            <StyledDiv>
                <h1>Selecione o horário</h1>
                {sessions.days.map((day) => (<Session weekday={day.weekday} date={day.date} showtimes={day.showtimes} key={day.id} />))}
            </StyledDiv>
            <MovioInfo posterURL={sessions.posterURL} title={sessions.title} />
        </>
    );
}

