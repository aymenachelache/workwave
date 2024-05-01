import React from 'react';
import './Logo.scss';
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import TextGradient from '../textGradient/TextGradient';


export default function Logo(props) {
    return (
        <div className={`logo ${props.className}`}>
            <Link to='/' className='flex items-center'>
                <img src={logo} alt="logo" />
                <TextGradient text='WorkWave' size='20px' weight='800' />
            </Link>
        </div>
    )
}
