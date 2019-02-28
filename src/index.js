import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {
  faGoogle,
  faFacebookF,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

import App from './App'
import * as serviceWorker from './serviceWorker'

// Importing CSS files
import './main.css'
import './index.css'

// Register Icons for using within the app
library.add(
  faSpinner,
  faEye,
  faEyeSlash,
  faGoogle,
  faFacebookF,
  faLinkedinIn,
  faTwitter
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
