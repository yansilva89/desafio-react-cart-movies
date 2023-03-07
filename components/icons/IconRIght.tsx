import styled from "styled-components"

interface RightIconProps {
  className?: string
}

const IconRight = styled(RightIcon)`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`
function RightIcon({ className }: RightIconProps) {
  return (
    <svg className={ className } viewBox="0 96 960 960" xmlns="http://www.w3.org/2000/svg">
      <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/>
    </svg>
  )
}


export { IconRight }
