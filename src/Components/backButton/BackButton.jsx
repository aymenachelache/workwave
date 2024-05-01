import React from 'react';
import './BackButton.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackButton() {
    return (
        <div className="back text-xs font-bold cursor-pointer text-[#CDCCC9]">
            <Link to='/' className='flex items-center relative'>
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className='ml-2 primaryfont'>Back</span>
            </Link>
        </div>
    )
}
