import styled from "styled-components"

const TitlesBox = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  color: #999;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  .product {
    width: 40%;
  }
  .number {
    width: 25%;
  }
  .subtotal {
    width: 25%;
  }
  .trash {
    width: 10%;
  }
`

export default function ColumnsTitles() {
  return (
    <TitlesBox>
      <div className="product">produto</div>
      <div className="number">qtd</div>
      <div className="subtotal">subtotal</div>
      <div className="trash"></div>
    </TitlesBox>
  )
}