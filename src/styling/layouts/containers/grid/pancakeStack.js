import styled from "styled-components"
import Grid from "./grid"

/**
 *    PancakeStack: Max 3 rows
 *    https://1linelayouts.glitch.me/*
 */
const PancakeStack = styled.div`
  ${Grid}
  grid-template-rows: auto minmax(0,1fr) auto;
  ${props => props.$style ?? {}}
`

export default PancakeStack
