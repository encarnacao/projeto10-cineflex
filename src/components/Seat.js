import { useEffect } from "react";
import styled from "styled-components";
export default function Seat({ selected, setSelected, name, id, seatNumbers, setSeatNumbers, isAvailable, seatInfo, setSeatInfo, reservation, setReservation }) {
    const isSelected = selected.includes(id);
    const seatNumber = name.length === 1 ? "0" + name : name;
    function selectSeat() {
        if (!isAvailable) {
            alert("Esse assento não está disponível");
            return;
        }
        if (!isSelected) {
            setSelected([...selected, id]);
            setSeatNumbers({...seatNumbers, [id]: seatNumber});
        } else if (isSelected) {
            const confirmation = window.confirm("Tem certeza que deseja desmarcar esse assento?");
            if (confirmation) {
                const seatInfoCopy = { ...seatInfo };
                const seatNumberCopy = { ...seatNumbers };
                delete seatNumberCopy[id];
                delete seatInfoCopy[id];
                setSeatInfo(seatInfoCopy);
                setSeatNumbers(seatNumberCopy);
                setSelected([...selected.filter((seat) => seat !== id)]);
            }
        }
    }
    useEffect(() => {
        const reservationCopy = { ...reservation };
        if (selected.length === 0) {
            //Evita que usuário envie pedido de reserva sem assentos selecionados
            delete reservationCopy.ids;
            setReservation(reservationCopy);
            return;
        };
        setReservation({ ...reservation, ids: selected });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected, setReservation]);
    return (
        <SeatButton
            onClick={selectSeat}
            className={isSelected ? "selected" : isAvailable ? "" : "disabled"}

            data-test="seat"
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
    &.disabled{
        background: #FBE192;
        border: 1px solid #F7C52B;
        color: #000;
    }
    &.selected{
        background: #1AAE9E;
        border: 1px solid #0E7D71;
    }
`;