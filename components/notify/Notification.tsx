import styled from "styled-components"

const Notify = styled.button`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  z-index: 1001;
  width: 170px;
  height: 54px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff5a45;
  color: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  /* Animation */
  transform: translate(-50px);
  opacity: 0;
  animation: animeLeft .8s forwards;
  @keyframes animeLeft {
    to {
      transform: initial;
      opacity: initial;
    }
  }
  @media (max-width: 500px) {
    width: 200px;
    height: 100px;
    border-radius: 80px;
    right: 3rem;
    border: 1px solid #2f2e41;
    p {
      font-size: 24px;
    }
  }
`

export default Notify