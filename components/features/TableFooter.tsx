import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store"
import BtnCart from "../buttons/BtnCart"

const TableFooterBox = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #999;
`
export default function TableFooter() {
  const total = useSelector((state: RootState) => state.cartState.items.reduce((acc, current) => {
    const subtotal = current.amount * current.price
    return acc + subtotal
  }, 0))

  return (
    <TableFooterBox>
      <BtnCart>finalizar compra</BtnCart>
      <p style={{color: '#000'}}>{total}</p>
    </TableFooterBox>
  )
}