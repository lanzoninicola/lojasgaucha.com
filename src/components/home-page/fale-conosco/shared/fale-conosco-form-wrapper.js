import * as React from "react"
import useDeepCompareEffect from "use-deep-compare-effect"

import { GridFixedContainer } from "@layouts/index"
import { useViewportInfo } from "@hooks"

import FaleConoscoMobileForm from "../mobile/fale-conosco-form"
import FaleConoscoLaptopForm from "../laptop/fale-conosco-form"

// import FormWrapperHeader from "./fale-conosco-form-headline"
// import FormWrapperContactInfo from "./fale-conosco-form-contactInfo"
// import FormWrapperMessage from "./fale-conosco-form-message"

// TODO: making the react-hook-form like a plugin of a form
// TODO: using form for analytics thanks to form state: https://react-hook-form.com/api#formState

// TODO: save content in Local Storage

const FaleConoscoFormWrapper = () => {
  const [formState, setFormState] = React.useState({
    submissionStage: "message-submission",
    formData: {},
  })

  const { device } = useViewportInfo()

  useDeepCompareEffect(() => {
    if (formState.submissionStage === "submission-completed") {
      console.log("do something with the data:", formState.formData)
    }
  }, [formState])

  const handleSubmission = (formStage, data) => {
    let nextFormState = { ...formState }

    nextFormState.submissionStage = formStage
    console.log("pre nextFormState", nextFormState)
    nextFormState.formData = { ...nextFormState.formData, ...data }

    console.log("post nextFormState", nextFormState)

    setFormState(nextFormState)
  }

  function renderMobileForm(props) {
    return <FaleConoscoMobileForm {...props} />
  }

  function renderLaptopForm(props) {
    return <FaleConoscoLaptopForm {...props} />
  }

  return (
    <GridFixedContainer columns="1fr" rows="1fr" gap="4">
      {device === "mobile" && renderMobileForm({ formState, handleSubmission })}
      {(device === "laptop" || device === "tablet") &&
        renderLaptopForm({ formState, handleSubmission })}
    </GridFixedContainer>
  )
}

export default FaleConoscoFormWrapper
