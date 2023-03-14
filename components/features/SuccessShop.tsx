import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import BtnCart from "../buttons/BtnCart"
import { FinalIconSvg } from "../icons/FinalIcon"
import { resetState } from "../../store/slices/cartSlice"

const Success = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 64px 0;
  color: #2F2E41;
  h2 {
    margin-bottom: 32px;
  }
  @media (max-width: 500px) {
    text-align: center;
    h2 {
      margin-top: 64px;
      font-size: 56px;
    }
    br {
      display: block;
    }
  }
`
export default function SuccessShop() {
  const dispatch = useDispatch()
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
    dispatch(resetState())
  }

  return (
    <>
    <Success>
      <h2>Compra finalizada com sucesso!</h2>
      <FinalIconSvg />
      <BtnCart onClick={() => goToHome()}>voltar</BtnCart>
    </Success>
    </>
  )
}