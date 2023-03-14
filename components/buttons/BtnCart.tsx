import styled from "styled-components"

const BtnCart = styled.button`
  min-width: 180px;
  height: 40px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #009EDD;
  color: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: background-color .5s ease-out;
  &:hover, &:active, &:focus {
    background-color:#17769a;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 84px;
    font-size: 28px;
  }
`

export default BtnCart