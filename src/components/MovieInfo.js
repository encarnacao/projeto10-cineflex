import Movie from "./Movie"
import styled from "styled-components"

export default function MovioInfo({ posterURL, title, id, weekday, time }) {
    const chosenSession = weekday !== undefined;
    return (
        <MovieInfoDiv>
            <Movie posterURL={posterURL} title={title} id={id} />
            <div>
                <h1>{title}</h1>
                {chosenSession && <h1>{weekday} - {time}</h1>}
            </div>
        </MovieInfoDiv>
    )
}

const MovieInfoDiv = styled.div`
    display:flex;
    align-items: center;
    margin-top: 15px;
    > div:first-child{
        width:64px;
        height: 89px;
    }
    > div:last-child{
        > h1{
        font-size: 26px;
        margin-bottom: 5px;
    }
    }
    
`;