import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../styles/GlobalStyles";

export default function Success({ info, setInfo }) {
    useEffect(() => {
        setInfo({
            movie: "Enola Holmes",
            date: "24/06/2021",
            hour: "15:00",
            seats: [15, 16],
            name: "João da Silva Sauro",
            cpf: "123.456.789-00"
        })
    }, [setInfo])
    return (
        <SuccessDiv>
            <div>
                Pedido feito com sucesso!
            </div>
            <div>
                <h1>Filme e sessão</h1>
                <p>{info.movie}</p>
                <p>{info.date} {info.hour}</p>
                <h1>Ingressos</h1>
                {info.seats.map((seat, index) => <p key={index}>Assento {seat}</p>)}
                <h1>Comprador</h1>
                <p>Nome: {info.name}</p>
                <p>CPF: {info.cpf}</p>
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