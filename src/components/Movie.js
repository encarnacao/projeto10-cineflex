import styled from "styled-components";

export default function Movie({ posterURL, title}) {
    return (
        <MovieDiv>
            <img src={posterURL} alt={title} />
        </MovieDiv>
    );
    }

const MovieDiv = styled.div`
    width: 145px;
    height: 209px;
    background-color: #FFFFFF;
    border-radius: 3px;
    margin: 5px 15px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        width: 100%;
        height: 100%;
    }
`;