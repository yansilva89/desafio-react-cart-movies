import { useSelector } from "react-redux"
import { RootState } from "../../store"
import styled from "styled-components"

const SubTotal = styled.div`
  width: 25%;
  color: #2F2E41;
  p {
    display: none;
  }
  @media (max-width: 500px) {
    width: 26%;
    position: absolute;
    bottom: 3rem;
    right: 0;
    text-align: center;
    p {
      font-size: 40px;
      font-weight: 700;
      display: block;
      color: #999;
    }
    h3 {
      font-size: 48px;
    }
  }
`

interface Props {
  id?: string,
}

export default function ProductSubTotal({ id }: Props) {
  const subtotal = useSelector((state: RootState) => {
    const currentItem = state.cartState.items.find(item => item.id === id)
    return currentItem.amount * currentItem.price
  }) // Calc. Subtotal

  return (
    <>
      <SubTotal>
        <p>subtotal</p>
        <h3>R$ {subtotal.toFixed(2)}</h3>
      </SubTotal>
    </>
  )
}