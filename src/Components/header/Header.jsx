import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './Header.scss'
import Button from '../Button/Button';
import { primaryColor, secondaryColor } from '../Variables/VariablesColors';
import TextGradient from '../textGradient/TextGradient';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo/Logo';


export default function Header(props) {
    const [isPhone, setIsPhone] = useState(false);
    const [scroll, setScroll] = useState(0);
    const navbar = useRef(null);

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
        navbar.current.classList.toggle("hidden");
    }

    return (
        <>
            <div className="header primaryfont" style={{ borderRadius: scroll > 50 || isPhone ? '0' : '0px 0px 40px 40px' }}>
                <div className="container mx-auto flex justify-between items-center">
                    <Logo className={isPhone ? 'order-2' : ''} />
                    {!isPhone ? (
                        <>
                            <div className="nav">
                                <NavLink to={"/"} className='link'>I want to work</NavLink>
                                <NavLink to={"/hire"} className='link hire'>I want to hire</NavLink>
                            </div>
                            <div className='flex gap-2'>
                                <Button link={'/login'} text="Login" clicked={true} color={props.hire ? secondaryColor : primaryColor} border />
                                <Button link={'/register'} text="Sign Up" clicked={false} color={props.hire ? secondaryColor : primaryColor} border/>
                            </div>
                        </>
                    ) :
                        <>
                            <span onClick={shNavbar} style={{width: '67px'}}><FontAwesomeIcon icon={faBars} className='text-3xl py-5 order-1 cursor-pointer' /></span>
                            <Button classes='primaryfont order-3' link={'/login'} text="Login" clicked={true} color={props.hire ? secondaryColor : primaryColor} border />
                        </>
                    }
                </div>
                {isPhone && 
                <div className="navbar hidden" ref={navbar}>
                    <ul className=''>
                        <li className='py-5 text-center cursor-pointer'><Link to='/'>Home</Link></li>
                        <li className='py-5 text-center cursor-pointer'><Link to='/'>Services</Link></li>
                        <li className='py-5 text-center cursor-pointer'><Link to='/'>I want to work</Link></li>
                        <li className='py-5 text-center cursor-pointer'><Link to='/'>I want to hire</Link></li>
                        <li className='py-5 text-center cursor-pointer'><Link to='/'>Contact Us</Link></li>
                    </ul>
                </div>
                }
            </div>
        </>
    );
}