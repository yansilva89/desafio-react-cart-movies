import styled from "styled-components";
import ColumnsTitles from "./ColumnsTitles";
import ProductNumber from "./ProductNumber";
import ProductPrice from "./ProductPrice";
import ProductSubTotal from "./ProductSubTotal";
import TrashCol from "./TrashColumn";

const LineTable = styled.div`
  width: '100%';
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

export default function LineTableCart() {
  return (
    <LineTable>
      <ProductPrice />
      <ProductNumber />
      <ProductSubTotal />
      <TrashCol />
    </LineTable>
  )
}