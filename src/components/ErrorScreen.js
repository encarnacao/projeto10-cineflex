import styled from "styled-components";
import { VscError } from "react-icons/vsc";
import { StyledButton } from "../styles/GlobalStyles";
import { useNavigate } from "react-router-dom";

export default function Error() {
    const navigate = useNavigate();
    return (
        <ErrorDiv>
            <ErrorIcon />
            <h1>Erro ao reservar assentos</h1>
            <h2>Por favor verifique seus dados</h2>
            <StyledButton width="100px" height="30px" onClick={()=>navigate(-1)}>Voltar</StyledButton>
        </ErrorDiv>
    );
}

const ErrorDiv = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > h1{
        font-size: 24px;
        color: #bd0d0d;
        margin: 10px 0;
    }
    >h2{
        font-size: 18px;
        color: #1d193f;
        margin: 10px 0;
    }
`;

const ErrorIcon = styled(VscError)`
    width: 100px;
    height: 100px;
    color: #bd0d0d;
`;