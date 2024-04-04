import './Footer.scss';
import logo from '../../assets/LogoFooter.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
        <div className="footer mt-32 py-4">
            <div className="container mx-auto">
                <div className="boxes grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="box box1 w-full sm:w-fit text-center sm:text:left m-10 lg:mx-10">
                        <img src={logo} alt="" className='mx-auto' style={{width: '80%'}} />
                        <p className='copyright text-xs text-center mt-4'>Copyright © 2024</p>
                    </div>
                    <div className="box box2 w-full sm:w-fit text-center md:text-left m-10 lg:mx-10">
                        <h4 className='text-sm font-bold mb-4'>Freelancer</h4>
                        <ul>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>How to start working</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>View categories</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>Get your skills certified</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>Get verified</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>Find freelance jobs</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>Share a service offer</Link></li>
                        </ul>
                    </div>
                    <div className="box box3 w-full sm:w-fit text-center md:text-left m-10 lg:mx-10">
                        <h4 className='text-sm font-bold mb-4'>Client</h4>
                        <ul>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>How to hire</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>View categories</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>Get verified</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>Find freelance services</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>Share a need</Link></li>
                        </ul>
                    </div>
                    <div className="box box4 w-full sm:w-fit text-center md:text-left m-10 lg:mx-10">
                        <h4 className='text-sm font-bold mb-4'>Help</h4>
                        <ul>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>About us</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>How it works</Link></li>
                            <li className='text-sm font-normal my-2 text-[#777775]'><Link to=''>Help & support</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}