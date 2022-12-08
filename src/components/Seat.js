import styled from "styled-components";
export default function Seat({selected, setSelected, name, isAvailable}){
    const isSelected = selected.includes(name);
    const seatNumber = name.length === 1 ? "0" + name : name;
    function selectSeat(){
        if(!isSelected){
            setSelected([...selected,name]);
        } else{
            setSelected([...selected.filter((seat) => seat !== name)]);
        }
    }

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