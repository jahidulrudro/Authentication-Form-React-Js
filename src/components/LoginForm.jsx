import React from 'react'
import {
  Button,
  Col,
  CustomInput,
  Fade,
  Form,
  FormGroup,
  Row
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IconInput from './IconInput'
import TogglablePasswordInput from './TogglablePasswordInput'

export default class LoginForm extends React.PureComponent {
  state = {
    form: {
      email: '',
      username: '',
      password: '',
      rememberMe: false
    },
    invalidEmail: false,
    invalidPassword: false,
    submitting: false
  }

  onSubmit = e => {
    e.preventDefault()
    const { email, password, rememberMe } = this.state.form
    // You can set your custom password regular expression here
    const passwordRegex = /^(?=.*\d).{6,}$/

    if (!email) this.setState({ invalidEmail: true })
    if (!password) this.setState({ invalidPassword: true })

    this.setState({ submitting: true })
    if (email && password && passwordRegex.test(password)) {
      // This is where you will call your api
      // Don't forget to setSubmitting(false) after resolving request
      setTimeout(() => {
        alert(
          `Email: ${email}\nPassword: ${password}\nRemember Me: ${rememberMe}`
        )
        this.setState({ submitting: false })
      }, 500)
    } else {
      this.setState({ invalidPassword: true })
      this.setState({ submitting: false })
    }
  }

  render() {
    const { setCurrentForm } = this.props.commonProps
    const { form, invalidEmail, invalidPassword, submitting } = this.state
    const { email, password, rememberMe } = form

    return (
      <Fade
        in={true}
        tag={Form}
        className="generic-form"
        method="POST"
        onSubmit={this.onSubmit}>
        <h3>Login</h3>
        <p>Login or Create an account to access Formalin</p>

        <p className="text-center font-weight-bold">Login With</p>
        <p className="d-flex" style={{ justifyContent: 'center' }}>
          <Button color="danger" className="mr-1">
            <FontAwesomeIcon icon={['fab', 'google']} className="mr-2" />
            Google
          </Button>
          <Button color="primary">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} className="mr-2" />
            facebook
          </Button>
        </p>

        <hr />

        {/* Email Input */}
        <IconInput
          autoFocus
          required
          type="email"
          name="email"
          placeholder="E-mail Address"
          onChange={e =>
            this.setState({ form: { ...form, email: e.target.value } })
          }
          onFocus={() => this.setState({ invalidEmail: false })}
          value={email}
          invalid={invalidEmail}
        />

        {/* Password Input */}
        <TogglablePasswordInput
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={e =>
            this.setState({ form: { ...form, password: e.target.value } })
          }
          onFocus={() => this.setState({ invalidPassword: false })}
          value={password}
          invalid={invalidPassword}
        />

        <Row className="mb-2">
          {/* Remember me checkbox */}
          <Col xs="6">
            <FormGroup>
              <CustomInput
                type="checkbox"
                label="Remember Me"
                id="remember-me"
                inline
                checked={rememberMe}
                onChange={() =>
                  this.setState({
                    form: { ...form, rememberMe: !this.state.form.rememberMe }
                  })
                }
              />
            </FormGroup>
          </Col>
          {/* Forgot Password */}
          <Col xs="6" className="text-right">
            <Button
              color="link"
              className="p-0"
              onClick={() => setCurrentForm('recover-password')}>
              Forgot Password?
            </Button>
          </Col>
        </Row>

        {/* Submit Button */}
        <Button
          type="submit"
          color="primary"
          block
          disabled={submitting || !(email && password)}>
          {submitting ? (
            <FontAwesomeIcon icon="spinner" className="fa-pulse" />
          ) : (
            'Login'
          )}
        </Button>
        <Button
          color="info"
          className="text-white"
          block
          onClick={() => setCurrentForm('register')}>
          Sign Up
        </Button>
      </Fade>
    )
  }
}
