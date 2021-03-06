import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { FlexContainer } from "../../layouts/inner/index"
import SVGIcon from "../../icons/SVGIcon"
import colorsTheme from "../../_theme/colorsTheme"
import { SmallText } from "../../typography/index"

const StyledCloseModalButton = styled.div`
  cursor: pointer;
`

const CloseModalButton = ({ modalKey, hideModal }) => {
  return (
    <StyledCloseModalButton>
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
    </StyledCloseModalButton>
  )
}

CloseModalButton.propTypes = {
  modalKey: PropTypes.string.isRequired,
}

export default CloseModalButton
