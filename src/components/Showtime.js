import { StyledButton } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

export default function Showtime({ id, name }) {
  return (
    <StyledButton width="83px" height="43px">
      <Link to={`/assentos/${id}`}>
        <p>{name}</p>
      </Link>
    </StyledButton>
  );
}

