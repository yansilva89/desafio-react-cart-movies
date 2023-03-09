import styled from "styled-components";
import { useDispatch } from "react-redux"
import { cartRemove, cartNotify } from "../../store/slices/cartSlice"
import { TrashIconSvg } from "../icons/TrashIcon";

const TrashBlock = styled.div`
  width: 10%;
  display: flex;
  justify-content: end;
  cursor: pointer;
`

export default function TrashCol({ item }) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(cartRemove(item))
    dispatch(cartNotify(true))
    setTimeout(() => {
      dispatch(cartNotify(false))
    }, 2000)
  }
  return (
    <TrashBlock onClick={() => handleClick()}>
      <TrashIconSvg />
    </TrashBlock>
  )
}