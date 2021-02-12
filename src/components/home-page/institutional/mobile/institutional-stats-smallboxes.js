import * as React from "react"
import { GridFixedContainer } from "@layouts/index"
import StatsSmallBox from "./institutional-stats-smallbox"

const StatsSmallBoxes = () => {
  return (
    <GridFixedContainer rows="1fr 1fr 1fr 1fr" columns="1fr" gap="4">
      <StatsSmallBox number="320" description="camas" />
      <StatsSmallBox number="320" description="camas" />
      <StatsSmallBox number="320" description="camas" />
      <StatsSmallBox number="320" description="camas" />
    </GridFixedContainer>
  )
}

export default StatsSmallBoxes
