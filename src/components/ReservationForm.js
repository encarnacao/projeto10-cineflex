import styled from "styled-components";

export default function ReservationForm(){
    return (
        <FormDiv>
            <h1>Nome do comprador:</h1>
            <StyledInput type="text" placeholder="Digite seu nome..."/>
            <h1>CPF do comprador:</h1>
            <StyledInput type="text" placeholder="Digite seu CPF..."/>
        </FormDiv>
    );
}

const FormDiv = styled.div`
    >h1{
        font-size: 18px;
        color: #293845;
        margin: 10px 0;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    height: 51px;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    padding: 15px;
    &::placeholder{
        color: #AFAFAF;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-style: italic;
    }
`;