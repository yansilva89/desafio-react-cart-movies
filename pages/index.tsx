import CardItem from '../components/features/CardItem';
import CartInfo from '../components/features/CartInfo';
import { Container, Header, MainList } from '../components/defaults/sharedstyles';
import { useProducts } from '../services/hooks/products';

export default function Home() {
  const data = useProducts()
  return (
    <>
      <Container>
        <Header>
          <h2>WeMovies</h2>
          <CartInfo />
        </Header>
        <MainList>
          {data.map((product) => (
            <CardItem 
            key={product.id} 
            id={product.id} 
            image={product.image}
            title={product.title}
            price={product.price}
            />
          ))}
        </MainList>
      </Container>
    </>
  )
}
