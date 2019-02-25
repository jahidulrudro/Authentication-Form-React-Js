import React from 'react'
import { FormFeedback, FormGroup, Input } from 'reactstrap'

const IconInputStyle = {
  position: 'relative'
}

const CustomInput = props => {
  const { feedbackText } = props

  // Removing to avoid 'invalid prop on DOM element' error
  delete props.feedbackText

  return (
    <FormGroup className="input-container">
      <Input {...props} style={IconInputStyle} />
      {feedbackText ? <FormFeedback>{feedbackText}</FormFeedback> : ''}
    </FormGroup>
  )
}

export default CustomInput
