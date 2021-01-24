import * as React from "react"
import ModalContext from "./modalContext"

let ModalProvider = ({ children }) => {
  // The "modals" state object tracked the modals component showed in the UI
  const [modalKey, setKey] = React.useState(0)
  const [modals, setModals] = React.useState({})
  const [isShown, setIsShown] = React.useState(false)

  React.useEffect(
    () => {
      return () => {
        // If the component is unmounted I will reset the modals state
        closeAllModals()
      }
    },
    // Pay attention to the dependency-list. When you unmount this component, all modals will close
    []
  )

  function generateNewModalKey() {
    setKey(() => {
      let newModalKey = modalKey
      return ++newModalKey
    })
  }

  const showModal = modalComponent => {
    if (modalComponent === undefined) {
      return new Error(
        `showModal() function - modalComponent parameter is undefined`
      )
    }

    if (typeof modalComponent !== "function") {
      return new Error(
        `showModal() function - modalComponent paramater must be function instead of ${typeof modalComponent}`
      )
    }

    const isModalExist =
      Object.values(modals).filter(
        modalComponentState => modalComponentState === modalComponent
      ).length !== 0

    if (!isModalExist) {
      generateNewModalKey()
      setModals({
        ...modals,
        [modalKey]: modalComponent,
      })
      setIsShown(true)
    }
  }

  const hideModal = modalKey => {
    setModals(modals => {
      if (!modals[modalKey]) {
        return modals
      }
      const newModals = { ...modals }
      delete newModals[modalKey]
      return newModals
    })
    setIsShown(false)
  }

  const closeAllModals = () => {
    setModals(() => {
      const newModals = {}
      return newModals
    })
    setIsShown(false)
  }

  const toggleModal = modalComponent => {
    let newModals = {}

    generateNewModalKey()
    newModals = {
      ...newModals,
      [modalKey]: modalComponent,
    }

    console.log(isShown)

    setModals(newModals)
    setIsShown(true)
  }

  // Update data to store inside the context
  const contextValue = { showModal, hideModal, toggleModal, isShown }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <>
        {Object.keys(modals).map(modalKey => {
          const ModalRendered = modals[modalKey]
          return (
            <ModalRendered
              key={modalKey}
              modalKey={modalKey}
              isShown={isShown}
              // modalName={modalName}
              hideModal={hideModal}
              toggleModal={toggleModal}
            />
          )
        })}
      </>
    </ModalContext.Provider>
  )
}

export default ModalProvider
