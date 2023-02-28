import styled from "styled-components"
import BtnCard from "../buttons/BtnCard"

interface Props {
  id?: string,
  title?: string,
  price?: number,
  image?: string
}

const CardIn = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 310px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  &:last-child {
    margin-right: 0;
  }
  p, h3 {
    color: #2F2E41;
    font-weight: 700;
  }
  p {
    font-size: 12px;
  }
  h3 {
    font-size: 16px;
  }
`

const ImgBox = styled.div`
  width: 50%;
  height: auto;
  margin-bottom: 8px;
  img {
    max-width: 100%;
  }
`

export default function CardItem({ title, price, image, id }: Props) {
  return (
    <>
      <CardIn>
        <ImgBox>
          <img 
            src={image} 
            alt={title} 
          />
        </ImgBox>
        <p>{title}</p>
        <h3>R$ {price}</h3>
        <BtnCard />
      </CardIn>
    </>
  )
}