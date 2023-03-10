import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store"
import { resetState } from "../../store/slices/cartSlice"
import BtnCart from "../buttons/BtnCart"
import FloatBtn from "../buttons/FloatBtn"
import { IconLeft } from "../icons/IconLeft"

const TableFooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #999;
  .box-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 17%;
    p {
      color: #999;
      font-size: 14px;
      font-weight: 700;
    }
    h2 {
      color: #2F2E41;
      font-size: 24px;
    }
  }
`
export default function TableFooter() {
  const total = useSelector((state: RootState) => state.cartState.items.reduce((acc, current) => {
    const subtotal = current.amount * current.price
    return acc + subtotal
  }, 0))
  const router = useRouter()
  const dispatch = useDispatch()

  const goToHome = () => {
    router.push('/')
  }

  const goToFinal = () => {
    router.push('/compra-finalizada')
    setTimeout(() => {
      dispatch(resetState())
    }, 100)
  }

  return (
    <TableFooterBox>
      {/* Float Btn */}
      <FloatBtn onClick={() => goToHome()}>
        <IconLeft />
        Voltar para lista
      </FloatBtn>
      <BtnCart onClick={() => goToFinal()}>finalizar compra</BtnCart>
      <div className="box-total">
        <p>Total:</p>
        <h2>R$ {total}</h2>
      </div>
    </TableFooterBox>
  )
}