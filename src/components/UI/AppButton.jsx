import React from 'react'

export const AppButton = ({ disabled, type, id, text, ...props }) => {
  return (
    <button disabled={disabled} type={type} id={id} {...props}>
      {text}
    </button>
  )
}
