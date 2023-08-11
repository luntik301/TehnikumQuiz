import React from 'react'

export const VariantWrapper = ({ id, labelText, checked, onChange }) => {
  return (
    <li className='variant-wrapper'>
      <input
        required
        checked={checked}
        type='radio'
        name='variant'
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>{labelText}</label>
    </li>
  )
}
