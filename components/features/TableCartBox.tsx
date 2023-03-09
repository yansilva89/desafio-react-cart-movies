import { useSelector } from "react-redux"
import { RootState } from "../../store"
import styled from "styled-components"
import Notify from "../notify/Notification"
import ColumnsTitles from "./ColumnsTitles"
import LineTableCart from "./TableCartLine"
import TableFooter from "./TableFooter"

const TableCartStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export default function TableCart() {
  const showNotification = useSelector((state: RootState) => state.cartState.notification)

  return (
    <>
      { showNotification && (<Notify>Item Removido</Notify>) }
      <TableCartStyle>
        <ColumnsTitles />
        <LineTableCart />
        <TableFooter />
      </TableCartStyle>
    </>
  )
}