import { StyledButton } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

export default function Showtime({ id, name }) {
  return (
    <Link to={`/assentos/${id}`}>
      <StyledButton width="83px" height="43px">
        {name}
      </StyledButton>
    </Link>
  );
}

