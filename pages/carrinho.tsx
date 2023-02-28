import CartInfo from "../components/features/CartInfo";
import { Container, Header, MainContent } from "../components/defaults/sharedstyles";
import TableCartShop from "../components/features/TableCartBox";

export default function Cart() {
  return (
    <>
      <Container>
        <Header>
          <h2>WeMovies</h2>
          <CartInfo />
        </Header>
        <MainContent>
          <TableCartShop />
        </MainContent>
      </Container>
    </>
  )
}
