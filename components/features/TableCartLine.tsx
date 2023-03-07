import styled from "styled-components";
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
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
  const itemsLine = useSelector((state: RootState) => state.cartState.items)

  return (
    <>
      {itemsLine.map((item) => (
        <LineTable>
          <ProductPrice image={item.image} name={item.title} price={item.price} />
          <ProductNumber />
          <ProductSubTotal subtotal={item.price} />
          <TrashCol />
      </LineTable>
      ))}
    </>
  )
}