import styled from "styled-components"

const AddCart = styled.button`
  width: 100%;
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
  margin-top: 8px;
  cursor: pointer;
  .icon-text {
    span {
    }
  }
`

export default function BtnCard({ onClick }) {
  return (
    <>
      <AddCart onClick={onClick}>
        adicionar ao carrinho
        <div className="icon-text">
          <span></span>
        </div>
      </AddCart>
    </>
  )
}