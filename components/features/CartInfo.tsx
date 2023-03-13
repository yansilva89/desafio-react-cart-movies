import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import styled from 'styled-components'
import { SvgIcon } from '../icons/ShopIcon'

const CartBox = styled.div`
  display: flex;
  width: 200px;
  @media (max-width: 500px) {
    justify-content: end;
    align-items: center;
    margin-right: 1rem;
  }
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
  @media (max-width: 500px) {
    h3 {
      display: none;
    }
    p {
      font-size: 32px;
      margin-right: 10px;
    }
  }
`

const CartIcon = styled.div`
  display: flex;
  align-items: center;
`

export default function CartInfo() {
  const itemsAmount = useSelector((state: RootState) => state.cartState.items.length)

  return (
    <>
      <CartBox>
        <CartData>
          <h3>Meu Carrinho</h3>
          <p>{itemsAmount} { itemsAmount > 1 || itemsAmount === 0 ? 'itens' : 'item' }</p>
        </CartData>
        <CartIcon>
          <SvgIcon />
        </CartIcon>
      </CartBox>
    </>
  )
}
