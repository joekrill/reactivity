import React from "react"
import PropTypes from "prop-types"

const TextField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label htmlFor={input.name}>
      {label}
      <input id={input.name} {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </label>
  </div>
)

TextField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.bool
  }).isRequired
}

export default TextField
