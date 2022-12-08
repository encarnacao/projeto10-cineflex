import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Showtime({ id, name }) {
  return (
    <ShowtimeDiv>
      <Link to={`/assentos/${id}`}>
        <p>{name}</p>
      </Link>
    </ShowtimeDiv>
  );
}

const ShowtimeDiv = styled.div`
    width: 83px;
    height: 43px;
    color: #FFFFFF;
    background-color: #E8833A;
    border-radius: 3px;
    margin-right: 8px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    > a{
        color: inherit;
        text-decoration: none;
    }
`;