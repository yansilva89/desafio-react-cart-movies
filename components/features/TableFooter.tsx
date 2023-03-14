import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store"
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
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    .box-total {
      width: 100%;
      justify-content: end;
      margin-bottom: 2rem;
      p {
        font-size: 40px;
        margin-right: 2rem;
      }
      h2 {
        font-size: 48px;
      }
    }
  }
`
export default function TableFooter() {
  const total = useSelector((state: RootState) => state.cartState.items.reduce((acc, current) => {
    const subtotal = current.amount * current.price
    return acc + subtotal
  }, 0))
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  const goToFinal = () => {
    router.push('/compra-finalizada')
  }

  return (
    <TableFooterBox>
      {/* Float Btn */}
      <FloatBtn onClick={() => goToHome()}>
        <IconLeft />
        <p>Voltar para lista</p>
      </FloatBtn>
      <BtnCart onClick={() => goToFinal()}>finalizar compra</BtnCart>
      <div className="box-total">
        <p>Total:</p>
        <h2>R$ {total.toFixed(2)}</h2>
      </div>
    </TableFooterBox>
  )
}