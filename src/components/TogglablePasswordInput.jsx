import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IconInput from './IconInput'

const toggleButtonStyle = {
  position: 'absolute',
  top: '11px',
  right: '7px',
  cursor: 'pointer'
}

const TogglablePasswordInput = props => {
  const [visibility, setVisibility] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      <IconInput {...props} type={visibility ? 'text' : 'password'} />
      <FontAwesomeIcon
        icon={visibility ? 'eye-slash' : 'eye'}
        onClick={() => setVisibility(!visibility)}
        style={toggleButtonStyle}
      />
    </div>
  )
}

export default TogglablePasswordInput
