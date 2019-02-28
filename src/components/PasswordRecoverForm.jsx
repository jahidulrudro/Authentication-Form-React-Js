import React from 'react'
import { Button, Fade, Form } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IconInput from './IconInput'

export default class PasswordRecoverForm extends React.PureComponent {
  state = {
    email: '',
    submitting: false
  }

  onSubmit = e => {
    const { email } = this.state
    e.preventDefault()
    if (!email) return
    this.setState({ submitting: true })
    // This is where you will call your api
    // Don't forget to setSubmitting(false) after resolving request
    setTimeout(() => {
      alert(`Email: ${email}`)
      this.setState({ submitting: false })
    }, 500)
  }

  render() {
    const { email, submitting } = this.state
    const { setCurrentForm } = this.props.commonProps

    return (
      <Fade
        in={true}
        tag={Form}
        onSubmit={this.onSubmit}
        className="generic-form"
        method="POST">
        <h3 className="text-center">Reset Password</h3>
        <p className="text-center">
          Enter your e-mail address below to reset password
        </p>

        {/* Email Input */}
        <IconInput
          autoFocus
          required
          type="email"
          name="email"
          placeholder="E-mail Address"
          onChange={e => this.setState({ email: e.target.value })}
          value={email}
        />

        <Button block type="submit" color="danger">
          {submitting ? (
            <FontAwesomeIcon icon="spinner" className="fa-pulse" />
          ) : (
            'Reset Password'
          )}
        </Button>

        <p className="mt-2">
          Have an account?{' '}
          <Button
            className="p-0"
            color="link"
            onClick={() => setCurrentForm('login')}>
            Login
          </Button>
        </p>
      </Fade>
    )
  }
}
