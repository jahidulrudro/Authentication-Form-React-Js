import React from 'react'
import { Fade, Form, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IconInput from './IconInput'
import avatar from '../assets/images/avatar.png'

const imageContainerStyle = {
  width: '70px',
  borderRadius: '50%',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  boxShadow: '-2px 2px 7px rgba(0, 0, 0, 0.1)'
}

export default class OtpForm extends React.PureComponent {
  state = {
    otp: '',
    otpMaxDigits: 6,
    submitting: false
  }

  onSubmit = e => {
    const { otp, otpMaxDigits } = this.state
    e.preventDefault()

    if (otp.length < otpMaxDigits) return null

    this.setState({ submitting: true })
    // This is where you will call your api
    // Don't forget to setSubmitting(false) after resolving request
    setTimeout(() => {
      alert(`OTP: ${otp}`)
      this.setState({ submitting: false })
    }, 500)
  }

  handleOtpOnChange = e => {
    const { otpMaxDigits } = this.state
    const { value } = e.target
    const otpRegex = /^\d*$/g
    if (value.length <= otpMaxDigits && otpRegex.test(value))
      this.setState({ otp: value })
  }

  render() {
    const { otp, otpMaxDigits, submitting } = this.state

    return (
      <Fade
        in={true}
        tag={Form}
        onSubmit={this.onSubmit}
        className="generic-form"
        method="POST">
        <div style={imageContainerStyle} className="mx-auto my-2">
          <img src={avatar} alt="Avatar" className="img-fluid" />
        </div>
        <p className="text-center">
          Enter the <b>OTP</b> code you received below
        </p>

        {/* OTP Code Input */}
        <IconInput
          autoFocus
          required
          type="text"
          name="otp"
          placeholder="OTP Code"
          onChange={this.handleOtpOnChange}
          value={otp}
        />

        <Button
          block
          type="submit"
          color="primary"
          disabled={otp.length < otpMaxDigits}>
          {submitting ? (
            <FontAwesomeIcon icon="spinner" className="fa-pulse" />
          ) : (
            'Submit'
          )}
        </Button>
      </Fade>
    )
  }
}
