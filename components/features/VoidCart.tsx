import { useRouter } from "next/router"
import styled from "styled-components"
import BtnCart from "../buttons/BtnCart"
import { VoidIconSvg } from "../icons/VoidIcon"

const VoidCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 64px 0;
  color: #2F2E41;
  h2 {
    margin-bottom: 32px;
  }
  @media (min-width: 501px) {
    br {
      display: none;
    }
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
export default function VoidCart() {
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  return (
    <>
    <VoidCard>
      <h2>Parece que não <br></br> há nada por aqui :(</h2>
      <VoidIconSvg />
      <BtnCart onClick={() => goToHome()}>voltar</BtnCart>
    </VoidCard>
    </>
  )
}