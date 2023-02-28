import styled from "styled-components"
import BtnCart from "../buttons/BtnCart"

const TableFooterBox = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #999;
`
export default function TableFooter() {
  return (
    <TableFooterBox>
      <BtnCart>finalizar compra</BtnCart>
    </TableFooterBox>
  )
}