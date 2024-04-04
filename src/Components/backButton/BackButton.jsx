import React from 'react';
import './BackButton.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { greyColor } from '../Variables/VariablesColors';

export default function BackButton() {
    function rtn() {
        window.history.back();
     }
    return (
        <div className={`back text-xs font-bold cursor-pointer text-[${greyColor}]`}>
            <span onClick={rtn} className='flex items-center relative'>
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className='ml-2 primaryfont'>Back</span>
            </span>
        </div>
    )
}
