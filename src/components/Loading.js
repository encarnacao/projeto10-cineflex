import styled from "styled-components";
import loading from "../assets/loading.gif";

export default function Loading(){
    return (
        <StyledDiv>
            <img src={loading} alt="Carregando" />
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    > img{
        width: 100px;
    }
`;