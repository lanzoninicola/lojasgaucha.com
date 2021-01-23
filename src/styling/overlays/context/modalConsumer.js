/**
 *  The Modal Consumer adds to each child component
 *  the "onClick" event that let opens a Modal Component.
 *
 *  Each child component opens a specific Modal,
 *  this specification is described inside the "modalsCatalog" object
 *
 *  The "modalsCatalog"'s shape is:
 *  {
 *    <modal_name><string>: () => <specific_modalComponent><React.Component>
 *    <modal_name><string>: () => <specific_modalComponent><React.Component>
 *    ...
 *  }
 *
 */

import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"
import ModalContext from "./modalContext"

const ModalConsumer = ({
  modalsCatalog,
  modal,
  action = "show",
  children,
  ...props
}) => {
  // From the theme I will grab the name of modals that corresponding to the nav-items
  const themeContext = React.useContext(ThemeContext)
  const { showModal, toggleModal } = React.useContext(ModalContext)
  modalsCatalog = modalsCatalog ?? themeContext?.modal?.modals
  const modalComponent = modalsCatalog[modal]

  React.useEffect(() => {
    return () => {
      if (modal && modalsCatalog === undefined) {
        throw new Error("A modals catalog has not been defined")
      }

      if (typeof modal == "string" && modalsCatalog[modal] === undefined) {
        throw new Error(`No modal was found with the name provided: ${modal}`)
      }
    }
  }, [])

  // 2021-06-1 This component run in the manner I sat up now,
  // but if I move the component to the parent it is not run as expected

  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      onClick: () => {
        if (action === "show") {
          return showModal(modalComponent)
        }
        if (action === "toggle") {
          return toggleModal(modalComponent)
        }
      },
    })
  })
}

ModalConsumer.propTypes = {
  modalsCatalog: (props, propName, componentName) => {
    const modalsCatalogObject = props[propName]

    if (props[propName] !== undefined) {
      if (typeof props[propName] !== "object") {
        return new Error(
          `modalConsumer - PropTypes error: The prop "${propName}" supplied to "${componentName}" must be an object.`
        )
      }

      Object.values(modalsCatalogObject).map(modalValue => {
        console.log(modalValue, typeof modalValue)
        if (typeof modalValue !== "function") {
          console.log("inside if !function")
          return new Error(
            `modalConsumer - PropTypes error: Invalid prop "${propName}" supplied to "${componentName}". The value of "${propName}" must be a function that returns a React Component`
          )
        }
      })
    }
  },
  modal: (props, propName, componentName) => {
    if (typeof props[propName] == "string" && props[propName] === undefined) {
      return new Error(
        `modalConsumer - PropTypes error: The prop "${propName}" supplied to "${componentName}" is required.`
      )
    }

    if (props[propName] !== undefined) {
      if (
        !typeof props[propName] === "string" ||
        !typeof props[propName] === "function"
      ) {
        return new Error(
          `modalConsumer - PropTypes error: The prop "${propName}" supplied to "${componentName}" must be a string. Instead of ${typeof props[
            propName
          ]}`
        )
      }
    }
  },
  action: PropTypes.oneOf(["show", "toggle"]),
}

export default ModalConsumer
