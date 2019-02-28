import React from 'react'
import { Button, CustomInput, Fade, Form, FormGroup } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IconInput from './IconInput'
import TogglablePasswordInput from './TogglablePasswordInput'

export default class RegistrationForm extends React.PureComponent {
  state = {
    form: {
      email: '',
      username: '',
      password: '',
      acceptTerms: false
    },
    invalidEmail: false,
    invalidUsername: false,
    invalidPassword: false,
    submitting: false
  }

  onSubmit = e => {
    e.preventDefault()
    const { email, username, password, acceptTerms } = this.state.form
    // You can set your custom password regular expression here
    const passwordRegex = /^(?=.*\d).{6,}$/

    if (!email) this.setState({ invalidEmail: true })
    if (!username) this.setState({ invalidUsername: true })
    if (!password) this.setState({ invalidPassword: true })

    this.setState({ submitting: true })
    if (email && username && password && passwordRegex.test(password)) {
      // This is where you will call your api
      // Don't forget to this.setState({ submitting: false }) after resolving request
      setTimeout(() => {
        alert(
          `Email: ${email}\nUsername: ${username}\nPassword: ${password}\nAccept Terms: ${acceptTerms}`
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
    const {
      form,
      invalidEmail,
      invalidPassword,
      invalidUsername,
      submitting
    } = this.state
    const { email, username, password, acceptTerms } = form

    return (
      <Fade
        tag={Form}
        in={true}
        className="generic-form"
        method="POST"
        onSubmit={this.onSubmit}>
        <p className="text-center font-weight-bold">Register With</p>
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

        {/* Username Input */}
        <IconInput
          required
          type="text"
          name="username"
          placeholder="Username"
          onChange={e =>
            this.setState({ form: { ...form, username: e.target.value } })
          }
          onFocus={() => this.setState({ invalidUsername: false })}
          value={username}
          invalid={invalidUsername}
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

        <FormGroup>
          <CustomInput
            type="checkbox"
            id="accept-terms"
            label="Accept"
            className="mr-0"
            inline
            required
            checked={acceptTerms}
            onChange={() =>
              this.setState({ form: { ...form, acceptTerms: !acceptTerms } })
            }
          />{' '}
          <a href="/">Terms &amp; Conditions</a>
        </FormGroup>

        {/* Submit Button */}
        <Button
          type="submit"
          color="primary"
          block
          disabled={submitting || !(email && password)}>
          {submitting ? (
            <FontAwesomeIcon icon="spinner" className="fa-pulse" />
          ) : (
            'Submit'
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
