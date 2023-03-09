import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import styled from "styled-components"
import { cartAdd, cartNotify, cartRemove } from "../../store/slices/cartSlice"
import BtnCard from "../buttons/BtnCard"
import Notify from "../notify/Notification"

interface Props {
  id?: string,
  title?: string,
  price?: number,
  image?: string
}

const CardIn = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 310px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  &:last-child {
    margin-right: 0;
  }
  p, h3 {
    color: #2F2E41;
    font-weight: 700;
  }
  p {
    font-size: 12px;
  }
  h3 {
    font-size: 16px;
  }
`

const ImgBox = styled.div`
  width: 50%;
  height: auto;
  margin-bottom: 8px;
  img {
    max-width: 100%;
  }
`

export default function CardItem(props: Props) {
  const dispatch = useDispatch()
  const isCardInList = useSelector((state: RootState) => state.cartState.items.some(item => item.id === props.id))
  const showNotification = useSelector((state: RootState) => state.cartState.notification)

  const handleClick = () => {
    if (isCardInList) {
      dispatch(cartRemove(props))
      dispatch(cartNotify(true))
      setTimeout(() => {
        dispatch(cartNotify(false))
      }, 2000)
    } else {
      dispatch(cartAdd({...props, amount: 1})) // Inicializar quant. mínima
    }
  }

  return (
    <>
      { showNotification && (<Notify>Item Removido</Notify>) }
      <CardIn>
        <ImgBox>
          <img 
            src={props.image} 
            alt={props.title} 
          />
        </ImgBox>
        <p>{props.title}</p>
        <h3>R$ {props.price}</h3>
        <BtnCard onClick={() => handleClick()} changeColorBtn={isCardInList} />
      </CardIn>
    </>
  )
}