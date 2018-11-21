import React from 'react'


const Button = (props) => {
  const {type, color, children, onClick, ...rest} = props
  //const sizeClass = size ? `btn-${size}` : ''
  console.log(props , 'im button props', onClick)
  return (
    <button
      type={type}
      className={`btn btn-${color}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  color: 'default',
  children: 'submit'
}

export default Button
