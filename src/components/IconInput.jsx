import React from 'react'
import { FormFeedback, FormGroup, Input } from 'reactstrap'

const IconInputStyle = {
  position: 'relative'
}

const CustomInput = props => {
  const { feedbackText, ...inputProps } = props

  return (
    <FormGroup className="input-container">
      <Input {...inputProps} style={IconInputStyle} />
      {feedbackText ? (
        <FormFeedback valid={!inputProps.invalid}>{feedbackText}</FormFeedback>
      ) : (
        ''
      )}
    </FormGroup>
  )
}

export default CustomInput
