import * as React from "react"

import { GridFixedContainer } from "@layouts/index"
import { SVGIcon } from "@icons"
import { colorsTheme } from "@theme"
import InstitutionalTitles from "./institutional-titles"
import { objectKeys } from "@utils"

const data = {
  WOMAN_FACE: { size: "96", color: "blue", w: null, h: null },
  MAN_FACE: { size: "96", color: "blue", w: "89", h: "100" },
  CHILD_MALE_FACE: { size: "96", color: "blue", w: null, h: null },
  CHILD_FEMALE_FACE: { size: "96", color: "blue", w: "119", h: "96" },
  YOUNG_MAN_FACE: { size: "96", color: "blue", w: "89", h: "104" },
  YOUNG_WOMAN_FACE: { size: "96", color: "blue", w: "107", h: null },
  OLD_MAN_FACE: { size: "96", color: "blue", w: null, h: null },
  OLD_WOMAN_FACE: { size: "96", color: "blue", w: "97", h: "104" },
}

const InstitutionalFamilias = () => {
  return (
    <>
      <GridFixedContainer columns="1fr" rAuto centerX centerY>
        <InstitutionalTitles>
          e fizemos muitas famílias felizes
        </InstitutionalTitles>
        <GridFixedContainer
          columns="1fr 1fr 1fr 1fr"
          rows="1fr 1fr"
          centerX
          centerY
        >
          {objectKeys(data).map((icon, key) => {
            return (
              <SVGIcon
                key={key}
                name={icon}
                size={data[icon]?.size}
                color={colorsTheme(data[icon]?.color)}
                wSVG={data[icon]?.w}
                hSVG={data[icon]?.h}
              />
            )
          })}
        </GridFixedContainer>
      </GridFixedContainer>
    </>
  )
}

export default InstitutionalFamilias
