import * as React from "react"

import FaleConoscoFormHeader from "./fale-conosco-form-headline"
import FaleConoscoFormContactInfo from "./fale-conosco-form-contactInfo"
import FaleConoscoFormMessage from "./fale-conosco-form-message"

// TODO: making the react-hook-form like a plugin of a form
// TODO: using form for analytics thanks to form state: https://react-hook-form.com/api#formState

// TODO: save content in Local Storage

const FaleConoscoMobileForm = ({ formState, handleSubmission }) => {
  return (
    <>
      <FaleConoscoFormHeader submissionStage={formState.submissionStage} />
      {formState.submissionStage === "message-submission" && (
        <FaleConoscoFormMessage handleSubmission={handleSubmission} />
      )}
      {formState.submissionStage === "contactInfo-submission" && (
        <FaleConoscoFormContactInfo handleSubmission={handleSubmission} />
      )}
      {formState.submissionStage === "submission-completed" && (
        <>
          <div style={{ color: "white", fontSize: "40", marginBottom: "48" }}>
            URRAAAA!!! HAI VINTO UNA BAMBOLINA
          </div>
          <div style={{ color: "white", fontSize: "24", marginBottom: "48" }}>
            {JSON.stringify(formState?.formData)}
          </div>
        </>
      )}
    </>
  )
}

export default FaleConoscoMobileForm
