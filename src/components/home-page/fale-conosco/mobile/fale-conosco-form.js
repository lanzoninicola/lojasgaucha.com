import * as React from "react"

import { GridContainer } from "../../../../styling/layouts/inner"

import FaleConoscoFormHeader from "./fale-conosco-form-headline"
import FaleConoscoFormContactInfo from "./fale-conosco-form-contactInfo"
import FaleConoscoFormMessage from "./fale-conosco-form-message"

// TODO: making the react-hook-form like a plugin of a form
// TODO: using form for analytics thanks to form state: https://react-hook-form.com/api#formState

// TODO: save content in Local Storage

const FaleConoscoForm = () => {
  const [formStore, setFormStore] = React.useState({
    submissionStatus: "message-submission",
    formData: {},
  })

  React.useEffect(() => {
    if (formStore.submissionStatus === "submission-completed") {
      console.log("do something with the data:", formStore.formData)
    }
  }, [formStore])

  const handleSubmission = (status, data) => {
    let nextFormStore = { ...formStore }

    nextFormStore.submissionStatus = status
    console.log("pre nextFormStore", nextFormStore)
    nextFormStore.formData = { ...nextFormStore.formData, ...data }

    console.log("post nextFormStore", nextFormStore)

    setFormStore(nextFormStore)
  }

  return (
    <GridContainer rows=".25fr 1fr" gap="4" stretchX h100>
      <FaleConoscoFormHeader submissionStatus={formStore.submissionStatus} />
      {formStore.submissionStatus === "message-submission" && (
        <FaleConoscoFormMessage handleSubmission={handleSubmission} />
      )}
      {formStore.submissionStatus === "contactInfo-submission" && (
        <FaleConoscoFormContactInfo handleSubmission={handleSubmission} />
      )}
      {formStore.submissionStatus === "submission-completed" && (
        <div style={{ color: "white", fontSize: "40px" }}>
          URRAAAA!!! HAI VINTO UNA BAMBOLINA
        </div>
      )}
    </GridContainer>
  )
}

export default FaleConoscoForm
