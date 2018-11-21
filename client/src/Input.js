import React from 'react'

const Input = (props) => {
  const {onChange} = props
  const classNames = `form-control ${props.className}`

  return (
    <input className={classNames} onChange={onChange} {...props} />
  )
}

Input.defaultProps = {
  type: 'text'
}

export default Input
