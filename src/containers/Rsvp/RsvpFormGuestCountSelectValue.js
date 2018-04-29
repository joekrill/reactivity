import React from 'react';
import style from './RsvpForm.scss';

const RsvpFormGuestCountSelectValue = ({
  id,
  name,
  onChange,
  selected,
  value,
}) => (
  <label
    className={
      selected
        ? style.RadioSelectFieldSelected
        : style.RadioSelectFieldUnselected
    }
    htmlFor={`${id}.${value}`}
  >
    <span className={style.RadioSelectFieldMainText}>{value}
    </span>
    <input
      type="radio"
      name={name}
      value={value}
      id={`${id}.${value}`}
      checked={selected}
      onChange={onChange}
    />
    <small>
      {value === 0 ? 'Just me!' : `Me + ${value}`}
    </small>
  </label>
);

export default RsvpFormGuestCountSelectValue;
