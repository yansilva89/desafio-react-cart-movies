import styled from "styled-components";
import { Decrement } from "../icons/DecrementIcon";
import { Increment } from "../icons/IncrementIcon";

const ProductNumberStl = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`

const NumberBox = styled.div`
  width: 70px;
  padding: 5px;
  margin: 0 1rem;
  color: #2F2E41;
  font-size: 14px;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
`

export default function ProductNumber() {
  return (
    <ProductNumberStl>
      <Decrement />
      <NumberBox>
        <p>0</p>
      </NumberBox>
      <Increment />
    </ProductNumberStl>
  )
}