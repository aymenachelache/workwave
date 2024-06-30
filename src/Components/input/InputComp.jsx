import React from 'react';
import './InputComp.scss';

export default function InputComp(props) {
  return (
    <>
      <input onChange={props.onchange} defaultValue={props.value} type={props.type} name={props.name} id={props.id} className={`input-component ${props.className}`} placeholder={props.placeholder} required={props.required} disabled={props.disabled} pattern={props.pattern}  />
    </>
  )
}
