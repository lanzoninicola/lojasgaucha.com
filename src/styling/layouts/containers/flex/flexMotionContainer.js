import React from "react"
import styled from "styled-components"
import Flex from "./flex"
import { motion } from "framer-motion"

import { useDOMInfo } from "../../../_hooks/useDOM"

const FlexMotion = styled(motion.custom(Flex))``

const FlexMotionContainer = ({ children, ...props }) => {
  const ref = useDOMInfo()

  return (
    <>
      <FlexMotion ref={ref} {...props}>
        {children}
      </FlexMotion>
    </>
  )
}

export default FlexMotionContainer
