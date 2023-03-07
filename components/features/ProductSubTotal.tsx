import styled from "styled-components"

const SubTotal = styled.div`
  width: 25%;
  color: #2F2E41;
`

export default function ProductSubTotal({ subtotal }) {
  return (
    <>
      <SubTotal><h3>R$ {subtotal}</h3></SubTotal>
    </>
  )
}