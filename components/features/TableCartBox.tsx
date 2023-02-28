import styled from "styled-components"
import ColumnsTitles from "./ColumnsTitles"
import LineTableCart from "./TableCartLine"
import TableFooter from "./TableFooter"

const TableCartStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export default function TableCart() {
  return (
    <>
      <TableCartStyle>
        <ColumnsTitles />
        <LineTableCart />
        <TableFooter />
      </TableCartStyle>
    </>
  )
}