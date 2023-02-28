import styled from "styled-components"

interface DecrementIconProps {
  className?: string
}

const Decrement = styled(DecrementIcon)`
  width: 18px;
  height: 18px;
  fill: #009EDD;
  cursor: pointer;
`
function DecrementIcon({ className }: DecrementIconProps) {
  return (
    <svg className={ className } fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 8.1V9.9H13.5V8.1H4.5ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2Z" />
    </svg>
    
  )
}


export { Decrement }
