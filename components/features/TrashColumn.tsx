import styled from "styled-components";
import { useDispatch } from "react-redux"
import { cartRemove, cartNotify } from "../../store/slices/cartSlice"
import { TrashIconSvg } from "../icons/TrashIcon";

const TrashBlock = styled.div`
  width: 10%;
  display: flex;
  justify-content: end;
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    transition: background-color .3s ease-in-out;
    &:hover {
      background-color: #c0eeff;
    }
  }
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
      <div>
        <TrashIconSvg />
      </div>
    </TrashBlock>
  )
}