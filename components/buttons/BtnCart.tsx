import styled from "styled-components"

const BtnCart = styled.button`
  min-width: 120px;
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
`

export default BtnCart