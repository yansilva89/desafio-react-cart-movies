import styled from "styled-components"

interface LeftIconProps {
  className?: string
}

const IconLeft = styled(LeftIcon)`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  transform: rotate(180deg);
  margin-right: 5px;
`
function LeftIcon({ className }: LeftIconProps) {
  return (
    <svg className={ className } viewBox="0 96 960 960" xmlns="http://www.w3.org/2000/svg">
      <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/>
    </svg>
  )
}


export { IconLeft }
