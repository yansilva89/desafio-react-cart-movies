import styled from "styled-components"

const Loading = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: calc(100vh - 74px);
    margin-top: 74px;
    z-index: 999;
    .animation {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 5rem;
      height: 5rem;
      margin: .3125rem;
      border: .3125rem solid #fff;
      border-radius: 50%;
      animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
      &:nth-child(1) {
        animation-delay: -0.45s;
      }
      &:nth-child(2) {
        animation-delay: -0.3s;
      }
      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default function Loader() {
  return (
    <>
    <Loading>
      <div className="loader">
        <div className="animation"></div>
        <div className="animation"></div>
        <div className="animation"></div>
        <div className="animation"></div>
      </div>
    </Loading>
    </>
  )
}