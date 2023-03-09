import CardItem from '../components/features/CardItem';
import CartInfo from '../components/features/CartInfo';
import { Container, Header, MainList } from '../components/defaults/sharedstyles';
import { useProducts } from '../services/hooks/products';
import { useRouter } from 'next/router'
import Loader from '../components/features/Loader';
import BtnRouter from '../components/buttons/FloatBtn';
import { CartIcon } from '../components/icons/CartIconSvg';
import { IconRight } from '../components/icons/IconRIght';

export default function Home() {
  const data = useProducts()
  const router = useRouter()

  const goToCart = () => {
    router.push('/carrinho')
  }

  return (
    <>
      {/* Float Btn */}
      <BtnRouter onClick={() => goToCart()}>
        <CartIcon />
        Ver Carrinho
        <IconRight />
      </BtnRouter>
      {/* Notification */}
      {/* Container */}
      <Container>
        <Header>
          <h2>WeMovies</h2>
          <CartInfo />
        </Header>
        {data.loading ? 
          ( <Loader /> )
          : 
          ( 
            <MainList>
              {data.products.map((product) => (
                <CardItem 
                key={product.id} 
                id={product.id} 
                image={product.image}
                title={product.title}
                price={product.price}
                />
              ))}
            </MainList> 
          )
        }
      </Container>
    </>
  )
}
