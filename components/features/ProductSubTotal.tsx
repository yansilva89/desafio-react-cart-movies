import { useSelector } from "react-redux"
import { RootState } from "../../store"
import styled from "styled-components"

const SubTotal = styled.div`
  width: 25%;
  color: #2F2E41;
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
        <h3>R$ {subtotal}</h3>
      </SubTotal>
    </>
  )
}