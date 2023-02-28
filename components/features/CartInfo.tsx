import styled from 'styled-components'
import { SvgIcon } from '../icons/ShopIcon'

const CartBox = styled.div`
  display: flex;
  width: 200px;
`
const CartData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 1rem;
  h3 {
    font-weight: 600;
  }
  p {
    color: #999999;
    font-weight: 600;
  }
`

const CartIcon = styled.div`
  display: flex;
  align-items: center;
`

export default function CartInfo() {
  return (
    <>
      <CartBox>
        <CartData>
          <h3>Meu Carrinho</h3>
          <p>0 itens</p>
        </CartData>
        <CartIcon>
          <SvgIcon />
        </CartIcon>
      </CartBox>
    </>
  )
}
