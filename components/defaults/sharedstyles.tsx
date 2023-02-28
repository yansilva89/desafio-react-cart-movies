import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 960px;
  margin: 0 auto;
  min-height: 100vh;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 0 10px;
  margin-bottom: 1.5rem;
`

const MainList = styled.main`
  width: 100%;
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  border-radius: 4px;
`

const MainContent = styled.main`
  width: 100%;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #fff;
`

export { Container, Header, MainList, MainContent }
