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
  @media (max-width: 500px) {
    width: 100%;
    align-items: flex-start;
    img {
      width: 25%;
    }
    .block-info {
      width: 75%;
      flex-direction: row;
      p {
        font-size: 40px;
        margin-right: 2.5rem;
      }
      h3 {
        font-size: 40px;
      }
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