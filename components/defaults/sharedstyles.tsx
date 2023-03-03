import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  width: 960px;
  margin: 0 auto;
  min-height: 100vh;
`

const Header = styled.div`
  position: fixed;
  width: 960px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 0 10px;
`

const MainList = styled.main`
  width: 100%;
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  border-radius: 4px;
  margin-top: 88px;
`

const MainContent = styled.main`
  width: 100%;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #fff;
  margin-top: 88px;
`

export { Container, Header, MainList, MainContent }
