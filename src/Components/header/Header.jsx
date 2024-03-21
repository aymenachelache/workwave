import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './Header.scss'
import Button from '../Button/Button';
import { primaryColor } from '../Variables/VariablesColors';
import TextGradient from '../textGradient/TextGradient';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    const [isPhone, setIsPhone] = useState(true);
    const [scroll, setScroll] = useState(0);


    useEffect(() => {
        window.innerWidth < 768 ? setIsPhone(true) : setIsPhone(false);
    });

    useEffect(() => {

        function Resize() {
            window.innerWidth < 768 ? setIsPhone(true) : setIsPhone(false);
        }
        window.addEventListener('resize', Resize);


        function scrolling() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", scrolling);
        return () => {
            window.removeEventListener("scroll", scrolling);
            window.removeEventListener('resize', Resize);
        };
    }, []);

    function shNavbar() {
        console.log('red');
    }

    return (
        <>
            <div className="header primaryfont" style={{ borderRadius: scroll > 50 || isPhone ? '0' : '0px 0px 40px 40px' }}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className={`logo ${isPhone ?  'order-2' : ''}`}>
                        <Link to='/' className='flex items-center'>
                            <img src={logo} alt="logo" />
                            <TextGradient text='WorkWave' size='20px' weight='700' />
                        </Link>
                    </div>
                    {!isPhone ? (
                        <>
                            <div className="nav">
                                <NavLink to={"/"} className='link'>I want to work</NavLink>
                                <NavLink to={"/hire"} className='link'>I want to hire</NavLink>
                            </div>
                            <div className='flex gap-2'>
                                <Button link={'/login'} text="Login" clicked={true} color={`${primaryColor}`} border />
                                <Button link={'/register'} text="Register" clicked={false} color={`${primaryColor}`} border />
                            </div>
                        </>
                    ) :
                        <>
                            <FontAwesomeIcon onClick={shNavbar} icon={faBars} className='text-3xl p-5 order-1 cursor-pointer' style={{}} />
                            <Button classes='primaryfont order-3' link={'/login'} text="Login" clicked={true} color={`${primaryColor}`} border />
                        </>
                    }
                </div>
            </div>
        </>
    );
}