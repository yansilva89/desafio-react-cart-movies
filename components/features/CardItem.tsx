import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import styled from "styled-components"
import { cartAdd, cartRemove } from "../../store/slices/cartSlice"
import BtnCard from "../buttons/BtnCard"

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
  const [btnColorItem, setBtnColorItem] = useState(false)
  const isCardInList = useSelector((state: RootState) => state.cartState.items.some(item => item.id === props.id))

  const handleClick = () => {
    if (isCardInList) {
      dispatch(cartRemove(props))
      setBtnColorItem(false)
    } else {
      dispatch(cartAdd(props))
      setBtnColorItem(true)
    }
  }

  return (
    <>
      <CardIn>
        <ImgBox>
          <img 
            src={props.image} 
            alt={props.title} 
          />
        </ImgBox>
        <p>{props.title}</p>
        <h3>R$ {props.price}</h3>
        <BtnCard onClick={() => handleClick()} changeColorBtn={btnColorItem} />
      </CardIn>
    </>
  )
}