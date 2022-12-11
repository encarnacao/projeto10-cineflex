export default function Buyer({name, cpf, seatNumber}) {
    return (
        <>
            <h2>Assento {seatNumber}</h2>
            <p>Nome: {name}</p>
            <p>CPF: {cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
        </>
    )
}