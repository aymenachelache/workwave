import { Link, NavLink } from 'react-router-dom';
import './Header.scss'
import Button from '../Button/Button';
import { GET_ALL_NOTIFICATION, LOGOUT, baseURL, primaryColor, secondaryColor } from '../Variables/Variables';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faBars, faBell, faComments } from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo/Logo';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';




export default function Header(props) {
    const [isPhone, setIsPhone] = useState(false);
    const [scroll, setScroll] = useState(0);
    const navbar = useRef(null);
    const [hasAccount, setHasAccount] = useState(localStorage.getItem("email"));
    const [open, setOpen] = useState(false);
    const dropdownProfile = useRef();
    const dropdownMessages = useRef();
    const dropdownNotification = useRef();
    const [notification, setNotification] = useState([]);


    useEffect(() => {
        window.innerWidth < 768 ? setIsPhone(true) : setIsPhone(false);
        localStorage.getItem("email") ? setHasAccount(true) : setHasAccount(false);

        function Resize() {
            window.innerWidth < 768 ? setIsPhone(true) : setIsPhone(false);
        }
        window.addEventListener('resize', Resize);


        function scrolling() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", scrolling);


        // const handleNotification = async () => {
        //     try {
        //         const data = await axios.get(`${baseURL}/${GET_ALL_NOTIFICATION}`, {
        //             withCredentials: true,
        //         }).then((res) => {});
        //     } catch (err) {
        //         // console.log(err);
        //     }
        // };
        // handleNotification();


            if(localStorage.getItem("email")) {
                try {
                    const response = axios.get(`${baseURL}/api/notification/all`, {
                        withCredentials: true,
                    }).then((res) => {setNotification(res.data.data)
                        console.log(res)
                    })
                  } catch(err) {
                    console.log(err);
                  }
      
            }
        return () => {
            window.removeEventListener("scroll", scrolling);
            window.removeEventListener('resize', Resize);
        };

    }, []);



    function shNavbar() {
        navbar.current.classList.toggle("hidden");
        navbar.current.classList.contains('hidden') ? document.body.classList.remove("remove-scrolling") : document.body.classList.add("remove-scrolling");
    }

    const handleLogout = async (e) => {
        try {
            const data = await axios.get(`${baseURL}/${LOGOUT}`, {
                withCredentials: true,
            }).then(res => {
                console.log(res.data);
            });
            localStorage.clear();
            window.location = "/"  ;
        } catch (err) {
            console.log("logOut Error");
            console.log(err);
        }
    };

    return (
        <>
            <div className="header primaryfont" style={{ borderRadius: scroll > 50 || isPhone ? '0' : '0px 0px 40px 40px' }}>
                <div className="container mx-auto flex justify-between items-center">
                    <Logo className={isPhone ? 'hidden' : ''} />
                        <>
                            {!isPhone ? 
                                !localStorage.getItem("email") != "" ?
                                <div className="nav">
                                    <NavLink to={"/"} className='link'>I want to work</NavLink>
                                    <NavLink to={"/hire"} className='link hire'>I want to hire</NavLink>
                                </div> 
                                : 
                                ""
                            :
                            <span onClick={shNavbar} style={{ width: window.innerWidth < 300 && '67px' }}><FontAwesomeIcon icon={faBars} className='text-3xl py-5 order-1 cursor-pointer' /></span>
                            }
                            <div className='flex gap-2'>
                                {!hasAccount ?
                                    <>
                                        <Button link={'/login'} text="Login" clicked={true} color={props.hire ? secondaryColor : primaryColor} border />
                                        <Button link={'/register'} text="Sign Up" clicked={false} color={props.hire ? secondaryColor : primaryColor} border />
                                    </>
                                    :
                                    <>
                                        {/* DropDown Messages */}
                                        <div className='relative'>
                                            <button onClick={() => {
                                                dropdownMessages.current.classList.toggle("hidden");
                                                dropdownNotification.current.classList.add("hidden");
                                                dropdownProfile.current.classList.add("hidden");
                                            }}
                                                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-dark="true" data-popover-target="notifications-menu">
                                                <FontAwesomeIcon className='text-xl' icon={faComments} />
                                            </button>
                                            <ul ref={dropdownMessages} role="menu" data-popover="notifications-menu" data-popover-placement="bottom"
                                            className="hidden absolute z-5 right-0 w-80 mt-5 min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                                            <button role="menuitem"
                                                className="flex items-center w-full gap-4 px-3 py-2 pl-2 pr-8 leading-tight transition-all rounded-md outline-none cursor-pointer select-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                <img alt="tania andrew"
                                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                                    className="relative inline-block h-12 w-12 !rounded-full object-cover object-center" />
                                                <div className="flex flex-col gap-1">
                                                    <p className="block font-sans text-sm antialiased font-semibold leading-normal text-gray-700">
                                                        Tania send you a message
                                                    </p>
                                                    <p className="flex items-center gap-1 font-sans text-sm antialiased font-medium text-blue-gray-500">
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M7.99998 14.9C9.69736 14.9 11.3252 14.2257 12.5255 13.0255C13.7257 11.8252 14.4 10.1974 14.4 8.49998C14.4 6.80259 13.7257 5.17472 12.5255 3.97449C11.3252 2.77426 9.69736 2.09998 7.99998 2.09998C6.30259 2.09998 4.67472 2.77426 3.47449 3.97449C2.27426 5.17472 1.59998 6.80259 1.59998 8.49998C1.59998 10.1974 2.27426 11.8252 3.47449 13.0255C4.67472 14.2257 6.30259 14.9 7.99998 14.9ZM8.79998 5.29998C8.79998 5.0878 8.71569 4.88432 8.56566 4.73429C8.41563 4.58426 8.21215 4.49998 7.99998 4.49998C7.7878 4.49998 7.58432 4.58426 7.43429 4.73429C7.28426 4.88432 7.19998 5.0878 7.19998 5.29998V8.49998C7.20002 8.71213 7.28434 8.91558 7.43438 9.06558L9.69678 11.3288C9.7711 11.4031 9.85934 11.4621 9.95646 11.5023C10.0536 11.5425 10.1577 11.5632 10.2628 11.5632C10.3679 11.5632 10.472 11.5425 10.5691 11.5023C10.6662 11.4621 10.7544 11.4031 10.8288 11.3288C10.9031 11.2544 10.9621 11.1662 11.0023 11.0691C11.0425 10.972 11.0632 10.8679 11.0632 10.7628C11.0632 10.6577 11.0425 10.5536 11.0023 10.4565C10.9621 10.3593 10.9031 10.2711 10.8288 10.1968L8.79998 8.16878V5.29998Z"
                                                                fill="#90A4AE"></path>
                                                        </svg>
                                                        13 minutes ago
                                                    </p>
                                                </div>
                                            </button>
                                            <button role="menuitem"
                                                className="flex items-center w-full gap-4 px-3 py-2 pl-2 pr-8 leading-tight transition-all rounded-md outline-none cursor-pointer select-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                <img alt="natali craig"
                                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                                    className="relative inline-block h-12 w-12 !rounded-full object-cover object-center" />
                                                <div className="flex flex-col gap-1">
                                                    <p className="block font-sans text-sm antialiased font-semibold leading-normal text-gray-700">
                                                        Natali replied to your email.
                                                    </p>
                                                    <p className="flex items-center gap-1 font-sans text-sm antialiased font-medium text-blue-gray-500">
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M7.99998 14.9C9.69736 14.9 11.3252 14.2257 12.5255 13.0255C13.7257 11.8252 14.4 10.1974 14.4 8.49998C14.4 6.80259 13.7257 5.17472 12.5255 3.97449C11.3252 2.77426 9.69736 2.09998 7.99998 2.09998C6.30259 2.09998 4.67472 2.77426 3.47449 3.97449C2.27426 5.17472 1.59998 6.80259 1.59998 8.49998C1.59998 10.1974 2.27426 11.8252 3.47449 13.0255C4.67472 14.2257 6.30259 14.9 7.99998 14.9ZM8.79998 5.29998C8.79998 5.0878 8.71569 4.88432 8.56566 4.73429C8.41563 4.58426 8.21215 4.49998 7.99998 4.49998C7.7878 4.49998 7.58432 4.58426 7.43429 4.73429C7.28426 4.88432 7.19998 5.0878 7.19998 5.29998V8.49998C7.20002 8.71213 7.28434 8.91558 7.43438 9.06558L9.69678 11.3288C9.7711 11.4031 9.85934 11.4621 9.95646 11.5023C10.0536 11.5425 10.1577 11.5632 10.2628 11.5632C10.3679 11.5632 10.472 11.5425 10.5691 11.5023C10.6662 11.4621 10.7544 11.4031 10.8288 11.3288C10.9031 11.2544 10.9621 11.1662 11.0023 11.0691C11.0425 10.972 11.0632 10.8679 11.0632 10.7628C11.0632 10.6577 11.0425 10.5536 11.0023 10.4565C10.9621 10.3593 10.9031 10.2711 10.8288 10.1968L8.79998 8.16878V5.29998Z"
                                                                fill="#90A4AE"></path>
                                                        </svg>
                                                        1 hour ago
                                                    </p>
                                                </div>
                                            </button>
                                            <button role="menuitem"
                                                className="flex items-center w-full gap-4 px-3 py-2 pl-2 pr-8 leading-tight transition-all rounded-md outline-none cursor-pointer select-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                                <img alt="paypal" src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
                                                    className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
                                                <div className="flex flex-col gap-1">
                                                    <p className="block font-sans text-sm antialiased font-semibold leading-normal text-gray-700">
                                                        You&apos;ve received a payment.
                                                    </p>
                                                    <p className="flex items-center gap-1 font-sans text-sm antialiased font-medium text-blue-gray-500">
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M7.99998 14.9C9.69736 14.9 11.3252 14.2257 12.5255 13.0255C13.7257 11.8252 14.4 10.1974 14.4 8.49998C14.4 6.80259 13.7257 5.17472 12.5255 3.97449C11.3252 2.77426 9.69736 2.09998 7.99998 2.09998C6.30259 2.09998 4.67472 2.77426 3.47449 3.97449C2.27426 5.17472 1.59998 6.80259 1.59998 8.49998C1.59998 10.1974 2.27426 11.8252 3.47449 13.0255C4.67472 14.2257 6.30259 14.9 7.99998 14.9ZM8.79998 5.29998C8.79998 5.0878 8.71569 4.88432 8.56566 4.73429C8.41563 4.58426 8.21215 4.49998 7.99998 4.49998C7.7878 4.49998 7.58432 4.58426 7.43429 4.73429C7.28426 4.88432 7.19998 5.0878 7.19998 5.29998V8.49998C7.20002 8.71213 7.28434 8.91558 7.43438 9.06558L9.69678 11.3288C9.7711 11.4031 9.85934 11.4621 9.95646 11.5023C10.0536 11.5425 10.1577 11.5632 10.2628 11.5632C10.3679 11.5632 10.472 11.5425 10.5691 11.5023C10.6662 11.4621 10.7544 11.4031 10.8288 11.3288C10.9031 11.2544 10.9621 11.1662 11.0023 11.0691C11.0425 10.972 11.0632 10.8679 11.0632 10.7628C11.0632 10.6577 11.0425 10.5536 11.0023 10.4565C10.9621 10.3593 10.9031 10.2711 10.8288 10.1968L8.79998 8.16878V5.29998Z"
                                                                fill="#90A4AE"></path>
                                                        </svg>
                                                        5 hours ago
                                                    </p>
                                                </div>
                                            </button>
                                        </ul>
                                        </div>

                                        {/* DropDown Notification */}
                                        <div className='relative'>
                                            <button onClick={() => {
                                                dropdownNotification.current.classList.toggle("hidden");
                                                dropdownMessages.current.classList.add("hidden");
                                                dropdownProfile.current.classList.add("hidden");
                                            }}
                                                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-dark="true" data-popover-target="notifications-menu">
                                                <FontAwesomeIcon className='text-xl' icon={faBell} />
                                            </button>
                                            <ul ref={dropdownNotification} role="menu" data-popover="notifications-menu" data-popover-placement="bottom"
                                            className="hidden absolute z-5 right-0 w-80 mt-5 flex min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                                                <div className=" bg-gray-50 h-96 overflow-y-auto pt-8 px-4 right-0">
                                                    <div className="flex items-center justify-between">
                                                        <p tabIndex="0" className="focus:outline-none text-2xl font-semibold leading-6 text-gray-800">Notifications
                                                        </p>
                                                        <button onClick={() => dropdownNotification.current.classList.add("hidden")} role="button" aria-label="close modal" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md cursor-pointer">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M18 6L6 18" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M6 6L18 18" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </button>
                                                    </div>
                                                    {
                                                        notification.map((item, index) => 
                                                            <div key={index} className={`w-full p-3 mt-4 bg-white rounded shadow flex flex-shrink-0 ${item.checked ? "" : "bg-red-200"}`}>
                                                                <div tabIndex="0" aria-label="group icon" role="img"
                                                                    className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex flex-shrink-0 items-center justify-center">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M1.33325 14.6667C1.33325 13.2522 1.89516 11.8956 2.89535 10.8954C3.89554 9.89523 5.2521 9.33333 6.66659 9.33333C8.08107 9.33333 9.43763 9.89523 10.4378 10.8954C11.438 11.8956 11.9999 13.2522 11.9999 14.6667H1.33325ZM6.66659 8.66666C4.45659 8.66666 2.66659 6.87666 2.66659 4.66666C2.66659 2.45666 4.45659 0.666664 6.66659 0.666664C8.87659 0.666664 10.6666 2.45666 10.6666 4.66666C10.6666 6.87666 8.87659 8.66666 6.66659 8.66666ZM11.5753 10.1553C12.595 10.4174 13.5061 10.9946 14.1788 11.8046C14.8515 12.6145 15.2515 13.6161 15.3219 14.6667H13.3333C13.3333 12.9267 12.6666 11.3427 11.5753 10.1553ZM10.2266 8.638C10.7852 8.13831 11.232 7.52622 11.5376 6.84183C11.8432 6.15743 12.0008 5.41619 11.9999 4.66666C12.0013 3.75564 11.7683 2.85958 11.3233 2.06466C12.0783 2.21639 12.7576 2.62491 13.2456 3.2208C13.7335 3.81668 14.0001 4.56315 13.9999 5.33333C14.0001 5.80831 13.8987 6.27784 13.7027 6.71045C13.5066 7.14306 13.2203 7.52876 12.863 7.84169C12.5056 8.15463 12.0856 8.38757 11.6309 8.52491C11.1762 8.66224 10.6974 8.7008 10.2266 8.638Z"
                                                                            fill="#047857" />
                                                                    </svg>
                                                                </div>
                                                                <div className="pl-3 w-full">
                                                                    <div className="flex items-center justify-between w-full">
                                                                        <p tabIndex="0" className="focus:outline-none text-sm leading-4">
                                                                            <span className="text-indigo-700"></span> {item.message}
                                                                            </p>
                                                                        <div tabIndex="0" aria-label="close icon" role="button"
                                                                            className="focus:outline-none cursor-pointer">
                                                                        </div>
                                                                    </div>
                                                                    <p tabIndex="0" className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">{formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}</p>
                                                                </div>
                                                          </div>

                                                        )
                                                    }
                                                    
                                                    <div className="flex items-center justiyf-between">
                                                        <hr className="w-full" />
                                                        <p tabIndex="0"
                                                            className="focus:outline-none text-sm flex flex-shrink-0 leading-normal px-3 py-16 text-gray-500">Thats
                                                            it for now </p>
                                                        <hr className="w-full" />
                                                    </div>
                                                </div>  
                                        </ul>
                                        </div>
                                        {/* DropDown Profile */}
                                        <div className="flex justify-center items-center">
                                        <div onClick={() => {
                                            dropdownProfile.current.classList.toggle("hidden");
                                            dropdownNotification.current.classList.add("hidden");
                                            dropdownMessages.current.classList.add("hidden");
                                        }} className="flex justify-center items-center rounded-lg">
                                            <div className={"relative border-b-4 border-transparent border-indigo-700 transform transition duration-300"}  x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100">
                                                <div className="flex justify-center items-center space-x-3 cursor-pointer">
                                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#00AEEF]">
                                                    <img src={localStorage.getItem("picture")} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="text-gray-900 select-none">
                                                    <div className="cursor-pointer font-semibold text-xs capitalize">{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</div>
                                                    <div className="cursor-pointer text-xs font-light">{localStorage.getItem("role") == "user" ? "CLIENT" : "FREELANCER"}</div>
                                                </div>
                                                </div>
                                                <div ref={dropdownProfile} x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute w-60 px-5 py-3 bg-white rounded-lg shadow border mt-5 hidden">
                                                <ul className="space-y-3 ">
                                                    <li className="font-medium">
                                                    <Link to="/account" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-[#00AEEF]">
                                                        <div className="mr-3">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                        </div>
                                                        Account
                                                    </Link>
                                                    </li>
                                                    <li className="font-medium">
                                                    <Link to={localStorage.getItem("role") == "freelancer" ? "/work/personalspace/dashboard" : "/hire/personalspace/dashboard"} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-[#00AEEF]">
                                                        <div className="mr-3">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                        </div>
                                                        Dashboard
                                                    </Link>
                                                    </li>
                                                    <li className="font-medium">
                                                    <Link to={localStorage.getItem("role") == "freelancer" ? "/work/addService" : "/hire/addneed"} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-[#00AEEF]">
                                                        <div className="mr-3">
                                                        <FontAwesomeIcon icon={faAdd} className='text-xl ml-1 order-1 cursor-pointer' />
                                                        </div>
                                                        {localStorage.getItem("role") == "freelancer" ? "Add a Service" : "Add a need"}
                                                    </Link>
                                                    </li>
                                                    <li className="font-medium">
                                                    <Link onClick={handleLogout} href="/" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">
                                                        <div className="mr-3 text-red-600">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                                        </div>
                                                        Logout
                                                    </Link>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </>
                </div>
                {isPhone &&
                    <div className="navbar-header hidden" ref={navbar}>
                        <ul className=''>
                            <Link to='/' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >Home</li></Link>
                            <Link to='/services' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >Services</li></Link>
                            <Link to='/' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >I want to work</li></Link>
                            <Link to='/hire' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >I want to hire</li></Link>
                            <Link to='/register' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >Sign Up</li></Link>
                            <Link to='/contactus' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >Contact Us</li></Link>
                        </ul>
                    </div>
                }
            </div>
        </>
    );
}