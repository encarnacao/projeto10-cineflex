import styled from "styled-components";
import { useState } from "react";

export default function ReservationForm({reservation, setReservation}){
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    function handleReservation(e){
        setReservation({...reservation, [e.target.name]: e.target.value});
        if(e.target.name === "cpf"){
            //aceita apenas numeros
            setCpf(e.target.value.replace(/\D/g, ""));
        }
        if(e.target.name === "name"){
            setName(e.target.value.replace(/\d/g, '')); //aceita apenas letras
        }
    }
    console.log(name);
    return (
        <FormDiv>
            <h1>Nome do comprador:</h1>
            <StyledInput data-test="client-name" type="text" value={name} name="name" onChange={handleReservation} placeholder="Digite seu nome..." required/>
            <h1>CPF do comprador:</h1>
            <StyledInput data-test="client-cpf" type="text" pattern="\d*" maxLength="11" minLength="11" name="cpf" value={cpf} onChange={handleReservation} placeholder="Digite seu CPF..." required/>
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