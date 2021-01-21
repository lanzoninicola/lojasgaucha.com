import * as React from "react"

import colorsTheme from "./colorsTheme"
import BottomSheet from "../overlays/bottomSheet"
import FaleConoscoForm from "../../components/home-page/fale-conosco/mobile/fale-conosco-form"

const overlaysTheme = () => {
  return {
    layout: {
      backdrop: {
        bottomsheet: {},
      },
      bottomsheet: {
        background: colorsTheme("blue", { colorUnit: "rgba", opacity: 0.95 }),
        backdropFilter: 10, // value in PX //
      },
      modalInner: {
        background: colorsTheme("whitegray", {
          colorUnit: "rgba",
          opacity: 0.3,
        }),
        backdropFilter: 10, // value in PX
      },
      modalCard: {
        background: colorsTheme("whitegray", {
          colorUnit: "rgba",
          opacity: 0.7,
        }),
        backdropFilter: 10, // value in PX
      },
    },
    modals: {
      ModalFaleConosco: props => (
        <BottomSheet {...props}>
          {/* <FaleConosco /> */}
          <FaleConoscoForm />
        </BottomSheet>
      ),
      ModalAmbientes: props => <BottomSheet {...props} />,
      ModalMap: props => <BottomSheet {...props} />,
      ModalAgendamento: () => {},
    },
  }
}

export default overlaysTheme
