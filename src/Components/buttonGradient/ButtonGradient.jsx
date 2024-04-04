import React from 'react';
import './ButtonGradient.scss';
import { Link } from 'react-router-dom';

export default function ButtonGradient(props) {
  return (
    <Link to={props.link} className={'btn-gradient block w-full'} ><span className='text-lg font-extrabold primaryfont block'>{props.text}</span></Link>
  )
}
