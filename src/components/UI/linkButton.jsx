import React from 'react'
import { Link } from 'react-router-dom'

export const LinkButton = ({ linkPath, disabled }) => {
  return (
    <Link to={linkPath}>
      <button disabled={disabled}>Далее</button>
    </Link>
  )
}
