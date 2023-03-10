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
`
export default function VoidCart() {
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  return (
    <>
    <VoidCard>
      <h2>Parece que não há nada por aqui :(</h2>
      <VoidIconSvg />
      <BtnCart onClick={() => goToHome()}>voltar</BtnCart>
    </VoidCard>
    </>
  )
}