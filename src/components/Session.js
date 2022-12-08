import styled from "styled-components";
import Showtime from "./Showtime";

export default function Session({ weekday, date, showtimes}) {
  return (
      <SessionDiv>
        <h1>{weekday} - {date}</h1>
        <div>
            {showtimes.map((showtime) => (<Showtime name={showtime.name} id={showtime.id} key={showtime.id}/>))}
        </div>
      </SessionDiv>
    
  );
}

const SessionDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 0 25px;
    margin-top: 30px;
    > h1{
        font-size: 20px;
        margin-bottom: 20px;
    }
    > div{
        display: flex;
    }
`;