import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion } from "framer-motion"

import { FlexContainer } from "../layouts/inner/index"
import SVGIcon from "../icons/SVGIcon"
import colorsTheme from "../_theme/colorsTheme"
import { SmallText } from "../typography/index"

import useViewportInfo from "../_hooks/useViewportInfo"

// background: linear-gradient(
//   180deg,
//   #091e5f 82%,
//   rgba(9, 30, 95, 0) 89%,
//   #fefefe 100%
// );

const StyledBottomSheet = styled(motion.div)`
  position: fixed;
  overflow: hidden;
  top: 0px;

  background: ${({ theme }) => theme.modal.layout.bottomsheet.background};

  width: ${({ vw }) => `${vw}px`};
  height: ${({ vh }) => `${vh}px`};
  padding: 20px 16px 70px 16px;

  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  transform: ${({ vh }) => `translateY(${vh}px)`};
`

const StyledCloseBottomSheet = styled.div`
  cursor: pointer;
`

const CloseBottomSheet = ({ modalKey, hideModal }) => {
  return (
    <StyledCloseBottomSheet>
      <FlexContainer
        centerX
        centerY
        mt="24"
        onClick={() => hideModal(modalKey)}
      >
        <SVGIcon name="CIRCLE_X" size="24" color={colorsTheme("orange")} />
        <SmallText weight="600" color="orange" mt="4px">
          voltar
        </SmallText>
      </FlexContainer>
    </StyledCloseBottomSheet>
  )
}

const BottomSheet = ({ modalKey, isShown, hideModal, children }) => {
  const { width, height } = useViewportInfo()

  return (
    <>
      <StyledBottomSheet
        vh={height}
        vw={width}
        // initial={{ y: "100%" }}
        initial={{ y: "100%" }}
        // animate={{ y: "5%"}}
        animate={{ y: "0%" }}
        // transition={{ ease: "easeOut", duration: 0.9 }}
        transition={{
          // On Tap - Navigation
          type: "spring",
          delay: 0,
          stiffness: 500,
          damping: 60,
          mass: 1,
        }}
      >
        {/* <GridContainer gap="10px" rows="1fr 0.15fr" h100> */}
        <FlexContainer id="bottomSheet" column w100 stretchXS>
          {children}
          <CloseBottomSheet modalKey={modalKey} hideModal={hideModal} />
        </FlexContainer>
        {/* </GridContainer> */}
      </StyledBottomSheet>
    </>
  )
}

BottomSheet.propTypes = {
  status: PropTypes.string,
}

export default BottomSheet
