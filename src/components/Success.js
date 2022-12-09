import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../styles/GlobalStyles";
import Loading from "./Loading";

export default function Success({ info, reservation }) {
    const [sent, setSent] = useState(undefined);
    useEffect(() => {
        const reservationFormatted = {...reservation, cpf: reservation.cpf.replace(/[^0-9]/g, "")};
        console.log(reservationFormatted);
        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", reservationFormatted)
            .then(resp => {
                console.log(resp.data);
                setSent(true);
            });
    }, [setSent]);
    
    if(sent === undefined){
        return <Loading />;
    }

    return (
        <SuccessDiv>
            <div>
                Pedido feito com sucesso!
            </div>
            <div>
                <h1>Filme e sessão</h1>
                <p>{info.title}</p>
                <p>{info.date} {info.time}</p>
                <h1>Ingressos</h1>
                {reservation.ids.map((seat, index) => <p key={index}>Assento {seat}</p>)}
                <h1>Comprador</h1>
                <p>Nome: {reservation.name}</p>
                <p>CPF: {reservation.cpf}</p>
            </div>
            <Link to="/">
                <StyledButton width="225px" height="42px">Voltar para Home</StyledButton>
            </Link>
        </SuccessDiv>
    );
}

const SuccessDiv = styled.div`
    > div:first-child{
        width: 175px;
        height: 65px;
        font-size: 24px;
        font-weight: 700;
        color: #247a6b;
        text-align: center;
        margin: 120px auto 20px auto;
    }
    > div:nth-child(2){
        color: #293845;
        width: 100vw;
        padding: 0 30px;
        h1{
            font-weight: 700;
            font-size: 24px;
            margin-top: 30px;
            margin-bottom: 10px;
        }
        p{
            font-size: 22px;
            line-height: 26px;
            margin-bottom: 5px;
        }
    }
    a{
        text-decoration: none;
    }
    button{
        margin: 50px auto;
    }
`;