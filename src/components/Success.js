import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../styles/GlobalStyles";

export default function Success({ info, reservation, setBack, seatsNumbers }) {
    useEffect(() => {
        setBack(1);
    }, [setBack]);

    return (
        <SuccessDiv>
            <div>
                Pedido feito com sucesso!
            </div>
            <div>
                <span data-test="movie-info">
                    <h1>Filme e sessão</h1>
                    <p>{info.title}</p>
                    <p>{info.date} {info.time}</p>
                </span>
                <span data-test="seats-info">
                    <h1>Ingressos</h1>
                    {seatsNumbers.map((seat, index) => <p key={index}>Assento {seat}</p>)}
                </span>
                <span data-test="client-info">
                    <h1>Comprador</h1>
                    <p>Nome: {reservation.name}</p>
                    <p>CPF: {reservation.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
                </span>
            </div>
            <Link to="/">
                <StyledButton data-test="go-home-btn" width="225px" height="42px">Voltar para Home</StyledButton>
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