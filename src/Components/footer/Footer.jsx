import './Footer.scss';
import logo from '../../assets/LogoFooter.png'

export default function Footer() {
    return (
        <>
        <div className="footer mt-32 py-4">
            <div className="container mx-auto">
                <div className="boxes grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="box box1 w-full sm:w-fit text-center sm:text:left m-10 lg:mx-10">
                        <img src={logo} alt="" className='mx-auto' style={{width: '80%'}} />
                        <p className='copyright text-center mt-4'>Copyright © 2024</p>
                    </div>
                    <div className="box box2 w-full sm:w-fit text-center md:text-left m-10 lg:mx-10">
                        <h4 className='text-sm font-bold mb-4'>Freelancer</h4>
                        <ul>
                            <li className='text-sm font-light my-2 cursor-pointer'>How to start working</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>View categories</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>Get your skills certified</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>Get verified</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>Find freelance jobs</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>Share a service offer</li>
                        </ul>
                    </div>
                    <div className="box box3 w-full sm:w-fit text-center md:text-left m-10 lg:mx-10">
                        <h4 className='text-sm font-bold mb-4'>Client</h4>
                        <ul>
                            <li className='text-sm font-light my-2 cursor-pointer'>How to hire</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>View categories</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>Get verified</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>Find freelance services</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>Share a need</li>
                        </ul>
                    </div>
                    <div className="box box4 w-full sm:w-fit text-center md:text-left m-10 lg:mx-10">
                        <h4 className='text-sm font-bold mb-4'>Help</h4>
                        <ul>
                            <li className='text-sm font-light my-2 cursor-pointer'>About us</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>How it works</li>
                            <li className='text-sm font-light my-2 cursor-pointer'>Help & support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}