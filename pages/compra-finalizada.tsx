import CartInfo from "../components/features/CartInfo";
import { Container, Header, MainContent } from "../components/defaults/sharedstyles";
import SuccessShop from "../components/features/SuccessShop";

export default function Shopping() {

  return (
    <>
      <Container>
        <Header>
          <h2>WeMovies</h2>
          <CartInfo />
        </Header>
        <MainContent>
          <SuccessShop />
        </MainContent>
      </Container>
    </>
  )
}
