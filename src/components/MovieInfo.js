import Movie from "./Movie"
import styled from "styled-components"

export default function MovioInfo({ posterURL, title, weekday, time }) {
    const chosenSession = weekday !== undefined;
    return (
        <MovieInfoDiv data-test="footer">
            <Movie posterURL={posterURL} title={title}/>
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
    height: 117px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    color: #293845;
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