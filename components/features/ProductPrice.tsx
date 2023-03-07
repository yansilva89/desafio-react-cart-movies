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

export default function ProductPrice({ image, name, price }) {
  return (
    <ProductStyle>
      <img 
        src={image} 
        alt={name}
      />
      <div className="block-info">
        <p>{name}</p>
        <h3>R$ {price}</h3>
      </div>
    </ProductStyle>
  )
}