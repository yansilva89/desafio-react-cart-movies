import styled from "styled-components";
import { TrashIconSvg } from "../icons/TrashIcon";

const TrashBlock = styled.div`
  width: 10%;
  display: flex;
  justify-content: end;
`

export default function TrashCol() {
  return (
    <TrashBlock>
      <TrashIconSvg />
    </TrashBlock>
  )
}