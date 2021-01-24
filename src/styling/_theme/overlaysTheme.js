import * as React from "react"

import colorsTheme from "./colorsTheme"
import BottomSheet from "../overlays/bottomSheet/bottomSheet"
import FaleConosco from "../../components/home-page/fale-conosco/mobile/fale-conosco"
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
      navbar: {
        ModalFaleConosco: props => (
          <BottomSheet {...props}>
            <FaleConosco />
          </BottomSheet>
        ),
        ModalAmbientes: props => (
          <BottomSheet {...props}>
            <FaleConoscoForm />
          </BottomSheet>
        ),
        ModalMap: props => <BottomSheet {...props} />,
        ModalAgendamento: () => {},
      },
      faleConosco: {
        ModalFaleConoscoForm: props => (
          <BottomSheet {...props}>
            <FaleConoscoForm />
          </BottomSheet>
        ),
      },
    },
  }
}

export default overlaysTheme
