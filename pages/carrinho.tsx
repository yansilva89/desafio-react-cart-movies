import CartInfo from "../components/features/CartInfo";
import { Container, Header, MainContent } from "../components/defaults/sharedstyles";
import TableCartShop from "../components/features/TableCartBox";
import VoidCart from "../components/features/VoidCart";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Cart() {
  const isItemInCart = useSelector((state: RootState) => state.cartState.items.length)

  return (
    <>
      <Container>
        <Header>
          <h2>WeMovies</h2>
          <CartInfo />
        </Header>
        <MainContent>
          { isItemInCart === 0 ? 
            ( <VoidCart /> ) 
            : 
            ( <TableCartShop /> )
          }
        </MainContent>
      </Container>
    </>
  )
}
