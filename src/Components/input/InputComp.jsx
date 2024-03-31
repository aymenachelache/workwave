import React from 'react';
import './InputComp.scss';

export default function InputComp(props) {
  return (
    <>
      <input type={props.type} name={props.name} id={props.id} className={props.className} placeholder={props.placeholder} />
    </>
  )
}
