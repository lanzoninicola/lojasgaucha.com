import React from "react"
import styled from "styled-components"
import Flex from "./flex"
import { motion } from "framer-motion"

const FlexMotion = styled(motion.custom(Flex))``

const FlexMotionContainer = ({ children, ...props }) => {
  return (
    <>
      <FlexMotion {...props}>{children}</FlexMotion>
    </>
  )
}

export default FlexMotionContainer
