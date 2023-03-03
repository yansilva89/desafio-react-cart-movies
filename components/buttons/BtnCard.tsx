import styled from "styled-components"

interface AddCartProps {
  changeColor: boolean
}

const AddCart = styled.button<AddCartProps>`
  width: 100%;
  height: 40px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ changeColor }) => changeColor ? '#039B00' : '#009EDD'};
  color: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 8px;
  cursor: pointer;
  .icon-text {
    span {
    }
  }
`

export default function BtnCard({ onClick, changeColorBtn }) {
  return (
    <>
      <AddCart changeColor={changeColorBtn} onClick={onClick}>
        {changeColorBtn ? 'item adicionado' : 'adicionar ao carrinho'}
        <div className="icon-text">
          <span></span>
        </div>
      </AddCart>
    </>
  )
}