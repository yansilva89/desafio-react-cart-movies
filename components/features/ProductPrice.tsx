import styled from "styled-components"

const ProductStyle = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  img {
    max-width: 100%;
    width: 20%;
  }
  .block-info {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    color: #2F2E41;
    margin-left: 3rem;
    p {
      font-size: 14px;
    }
    h3 {
      font-size: 16px;
    }
  }
`

export default function ProductPrice() {
  return (
    <ProductStyle>
      <img 
        src="https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png" 
        alt="Viúva Negra" 
      />
      <div className="block-info">
        <p>Homem Aranha</p>
        <h3>R$ 29,99</h3>
      </div>
    </ProductStyle>
  )
}