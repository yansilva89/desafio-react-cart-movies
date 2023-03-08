import styled from "styled-components";
import { useDispatch } from "react-redux"
import { cartRemove } from "../../store/slices/cartSlice"
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
    // console.log('##ITEMCLICKED', item)
    dispatch(cartRemove(item))
  }
  return (
    <TrashBlock onClick={() => handleClick()}>
      <TrashIconSvg />
    </TrashBlock>
  )
}