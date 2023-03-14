import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Decrement } from "../icons/DecrementIcon";
import { Increment } from "../icons/IncrementIcon";
import { itemIncrement, itemDecrement } from "../../store/slices/cartSlice"
import { RootState } from "../../store";

const ProductNumberStl = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    width: 50%;
    position: absolute;
    bottom: 3rem;
    margin-left: 90px;
  }
`

const NumberBox = styled.div`
  width: 70px;
  padding: 5px;
  margin: 0 1rem;
  color: #2F2E41;
  font-size: 14px;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
  @media (max-width: 500px) {
    width: 200px;
    height: 80px;
    p {
      font-size: 40px;
      font-weight: 700;
    }
  }
`

interface Props {
  id?: string,
}

export default function ProductNumber({ id }: Props) {
  const itemAmount = useSelector((state: RootState) => state.cartState.items.find(item => item.id === id).amount) // Quant. do Item
  const dispatch = useDispatch()

  const toIncrement = () => {
    dispatch(itemIncrement(id))
  }
  const toDecrement = () => {
    if (itemAmount > 1) {
      dispatch(itemDecrement(id))
    }
  }

  return (
    <ProductNumberStl>
      <Decrement changeColor={itemAmount === 1} onClick={toDecrement} />
      <NumberBox>
        <p>{itemAmount}</p>
      </NumberBox>
      <Increment onClick={toIncrement} />
    </ProductNumberStl>
  )
}