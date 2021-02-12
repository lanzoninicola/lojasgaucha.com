import * as React from "react"

import { colorsTheme } from "@theme"
import BottomSheet from "../overlays/bottomSheet/bottomSheet"
import FaleConosco from "../../components/home-page/fale-conosco/mobile/fale-conosco"
import FaleConoscoForm from "../../components/home-page/fale-conosco/mobile/fale-conosco-form"
import Map from "../../components/home-page/map/mobile/map"
import Institutional from "../../components/home-page/institutional/shared/institutional"

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
      navbarLaptop: {
        ModalHorarios: props => (
          <BottomSheet {...props}>
            <FaleConosco />
          </BottomSheet>
        ),
        ModalPesquisa: props => (
          <BottomSheet {...props}>
            <FaleConoscoForm />
          </BottomSheet>
        ),
      },
      navbarMobile: {
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
        ModalMap: props => (
          <BottomSheet {...props}>
            <Map />
          </BottomSheet>
        ),
        ModalInstitutional: props => (
          <BottomSheet {...props}>
            <Institutional />
          </BottomSheet>
        ),
        ModalAgendamento: props => (
          <BottomSheet {...props}>
            <Institutional />
          </BottomSheet>
        ),
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
