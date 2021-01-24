import * as React from "react"
import ModalContext from "./modalContext"

let ModalProvider = ({ children }) => {
  // The "modals" state object tracked the modals component showed in the UI
  const [modalKey, setKey] = React.useState(0)
  const [modals, setModals] = React.useState({})
  const [modalsQueue, setModalsQueue] = React.useState([])
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

  function addModalToQueue(key) {
    setModalsQueue(modalsQueue => {
      let nextModalsQueue = [...modalsQueue]
      nextModalsQueue.push(key)
      return nextModalsQueue
    })
  }

  function removeModalFromQueue(key) {
    setModalsQueue(modalsQueue => {
      const nextModalsQueue = [...modalsQueue]
      const index = nextModalsQueue.indexOf(parseInt(key))
      if (index > -1) {
        nextModalsQueue.splice(index, 1)
      }
      return nextModalsQueue
    })
  }

  function removeAllModalsFromQueue() {
    setModalsQueue(modalsQueue => {
      const nextModalsQueue = [...modalsQueue]
      nextModalsQueue = []
      return nextModalsQueue
    })
  }

  function isModalShown(modal) {
    return (
      Object.values(modals).filter(
        modalComponentState => modalComponentState === modal
      ).length !== 0
    )
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

    if (!isModalShown(modalComponent)) {
      generateNewModalKey()
      setModals(modals => {
        let nextModals = { ...modals, [modalKey]: modalComponent }
        return nextModals
      })
      addModalToQueue(modalKey)
      setIsShown(true)
    }
  }

  const hideModal = modalKey => {
    setModals(modals => {
      if (!modals[modalKey]) {
        return modals
      }
      const nextModals = { ...modals }
      delete nextModals[modalKey]
      return nextModals
    })

    removeModalFromQueue(modalKey)

    setIsShown(false)
  }

  const closeAllModals = () => {
    setModals(() => {
      const nextModals = {}
      return nextModals
    })

    removeAllModalsFromQueue()

    setIsShown(false)
  }

  const toggleModal = modalComponent => {
    if (!isModalShown(modalComponent)) {
      showModal(modalComponent)
    }

    const lastModalOpened = modalsQueue[modalsQueue.length - 1]

    if (lastModalOpened !== undefined) {
      hideModal(lastModalOpened)
    }

    setIsShown(true)
  }

  // Update data to store inside the context
  const contextValue = {
    showModal,
    hideModal,
    toggleModal,
    modalsQueue,
    isShown,
  }

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
              // toggleModal={toggleModal}
            />
          )
        })}
      </>
    </ModalContext.Provider>
  )
}

export default ModalProvider
