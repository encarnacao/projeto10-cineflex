import { useEffect } from "react";
import styled from "styled-components";
export default function Seat({selected, setSelected, name, isAvailable, reservation, setReservation}){
    const isSelected = selected.includes(name);
    const seatNumber = name.length === 1 ? "0" + name : name;
    function selectSeat(){
        if(!isSelected){
            setSelected([...selected,name]);
        } else{
            setSelected([...selected.filter((seat) => seat !== name)]);
        }
    }
    useEffect(()=>{
        const reservationCopy = {...reservation};
        if(selected.length === 0){
            //Evita que usuário envie pedido de reserva sem assentos selecionados
            delete reservationCopy.ids;
            setReservation(reservationCopy);
            return;
        };
        setReservation({...reservation, ids: selected});
    },[selected, setReservation]);
    return (
        <SeatButton
            onClick={selectSeat}
            className={isSelected && "selected"}
            disabled={!isAvailable}
        >
            {seatNumber}
        </SeatButton>
    );


}

const SeatButton = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid #808F9D;
    background-color: #c3cfd9;
    margin: 0px 3px;
    text-align: center;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.2s;
    &:disabled{
        background: #FBE192;
        border: 1px solid #F7C52B;
        color: #000;
    }
    &.selected{
        background: #1AAE9E;
        border: 1px solid #0E7D71;
    }
`;